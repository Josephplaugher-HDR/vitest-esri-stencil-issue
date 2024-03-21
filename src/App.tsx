
import { useEffect, useRef, useState } from "react";
import esriConfig from "@arcgis/core/config.js";
import EsriMap from "./maps/components/EsriMap";
import EsriFeatureLayer from "./maps/components/EsriFeatureLayer";
import MapConfig from "./map-config";
import EsriMapView from "./maps/components/EsriMapView";
import Home from "@arcgis/core/widgets/Home";
import Compass from "@arcgis/core/widgets/Compass";
import EsriScaleBar from "./maps/components/widgets/EsriScalBar";
import MapView from "@arcgis/core/views/MapView";

async function useMapBuilder(mapContainer: React.MutableRefObject<any>) {
    const [view, setView] = useState<MapView>();
    esriConfig.apiKey = import.meta.env.VITE_ESRI_KEY;

    useEffect(() => {
        const map = EsriMap();
        const view = EsriMapView(map, mapContainer)
        setView(view);
        const regionLayer = EsriFeatureLayer(
            MapConfig.Services.Regions.url,
            MapConfig.Services.Regions.title,
        );
        map.add(regionLayer);
        const home = new Home({ view });
        const compass = new Compass({ view });
        const scaleBar = EsriScaleBar(view);
        view.when(async () => {
            view.ui.add(home, "top-left");
            view.ui.add(compass, "top-left");
            view.ui.add(scaleBar, "bottom-left");
        })
    }, [])
}
export default function App() {
    const mapContainer = useRef(null);
    useMapBuilder(mapContainer);

    return (
        <div className="container px-0 bg-white">
            <main role="main">
                <div ref={mapContainer} className="map-container">
                </div>
            </main>
        </div>
    )
}