import esriConfig from "@arcgis/core/config.js";
import MapView from "@arcgis/core/views/MapView";
import Compass from "@arcgis/core/widgets/Compass";
import Home from "@arcgis/core/widgets/Home";
import Measurement from "@arcgis/core/widgets/Measurement";
import EsriScaleBar from "../maps/components/widgets/EsriScalBar";
import EsriSearch from "../maps/components/widgets/EsriSearch";
import EsriLegend from "../maps/components/widgets/EsriLegend";
import EsriMeasure from "../maps/components/widgets/EsriMeasure";
import EsriBasemapGallery from "../maps/components/widgets/EsriBasemapGallery";
import EsriLayerList from "../maps/components/widgets/EsriLayerList";
import EsriPrint from "../maps/components/widgets/EsriPrint";
import EsriBookmark from "../maps/components/widgets/EsriBookmark";
import EsriSketch from "../maps/components/widgets/EsriSketch";
import SetPopups from "./SetPopups";
import Map from "@arcgis/core/Map.js";
import EsriMapView from "../maps/components/EsriMapView";
import IMapParams from "../maps/interfaces/MapParams.interface";
import ShareView from "../maps/components/widgets/ShareView";
import SharedView from "./SharedView";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import BuildSearchSource from "./BuildSearchSource";
import EmailView from "../maps/components/widgets/EmailView";
import PopoutMap from "../maps/components/widgets/PopoutMap";
import ViewIsPoppedOut from "./ViewIsPoppedOut";

export default function HDRMapBuilder(map: Map, mapParams: IMapParams, imgLayers: MapImageLayer[]): { view: MapView, measurement: Measurement } {

    // The majority of code that is used across all maps is here. When adding a feature for all maps, add it here.
    esriConfig.apiKey = import.meta.env.VITE_ESRI_KEY;

    const poppedOut = ViewIsPoppedOut();
    const view = EsriMapView(map, mapParams.mapContainer);
    const home = new Home({ view });
    const measurement = new Measurement({ view });
    const compass = new Compass({ view });
    const scaleBar = EsriScaleBar(view);
    const { search, searchWidget } = EsriSearch(view);
    const sketch = EsriSketch(map, view);
    const legend = EsriLegend(view);
    const measure = EsriMeasure(view, mapParams.measureRef);
    const bmgExpand = EsriBasemapGallery(view);
    const layerExpand = EsriLayerList(view);
    const print = EsriPrint(view);
    const bookmarkExpand = EsriBookmark(view);
    const popoutMap = PopoutMap(view);

    view.when(async () => {
        const share = ShareView(view);
        const emailView = EmailView(view);
        /* 
        These ones are within the view.when() because they requires the view
         to be loaded so they can access its properties
        */

        view.ui.add(home, "top-left");
        view.ui.add(measurement, "bottom-right");
        view.ui.add(compass, "top-left");
        view.ui.add(scaleBar, "bottom-left");
        view.ui.add(searchWidget, "top-right");
        view.ui.add(sketch, "top-right");
        view.ui.add(print, "top-right");
        view.ui.add(legend, "top-right");
        view.ui.add(measure, "top-left");
        view.ui.add(bmgExpand, "top-right");
        view.ui.add(layerExpand, "top-right");
        view.ui.add(bookmarkExpand, "top-right");
        view.ui.add(share, "top-right");
        view.ui.add(emailView, "top-right");

        // if the view is not already popped out, render the widget for it
        !poppedOut && view.ui.add(popoutMap, "top-right");

        // hide the sketch layer from the layer list
        view.map.layers.forEach((l: any) => l.title === "Sketch Layer" ? l.listMode = "hide" : null);

        // hide the sketch layer and vtls from from the search widget
        view.map.layers.forEach((l: any) => {
            l.title != "Sketch Layer" && l.type != "vector-tile" ? search.sources.push(BuildSearchSource(l)) : null;
        });

        imgLayers.forEach((il: any) => {
            il.allSublayers.forEach((s: any) => s.load().then((l: any) => SetPopups(l)));
        });

        /*
           If url parameters are present, this function will take them and 
           direct the view to their centerpoint and zoom.
           This is used for sharing a given mapview between users via a link
        */
        SharedView(view);
    })
    return { view, measurement };
}