import MapView from "@arcgis/core/views/MapView";
import Color from "@arcgis/core/Color";
import Map from "@arcgis/core/Map";
import { ESRI_VIEW_CENTER, ESRI_VIEW_ZOOM } from "../../utilities/Constants";

export default function EsriMapView(map: Map, mapContainer: any): MapView {
    return new MapView({
        container: mapContainer.current,
        map,
        center: ESRI_VIEW_CENTER,
        popup: {
            defaultPopupTemplateEnabled: true,
            highlightEnabled: true,
            dockEnabled: true,
            dockOptions: {
                // Disables the dock button from the popup
                buttonEnabled: true,
                // Ignore the default sizes that trigger responsive docking
                breakpoint: false,
                position: "bottom-left"
            },
        },
        zoom: ESRI_VIEW_ZOOM,
        highlightOptions: {
            color: new Color("blue")
        }
    });
}