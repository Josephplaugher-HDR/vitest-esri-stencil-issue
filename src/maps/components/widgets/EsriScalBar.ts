import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import MapView from "@arcgis/core/views/MapView.js";

export default function EsriScaleBar(view: MapView) {
    return new ScaleBar({
        view,
        unit: "imperial",
        style: "ruler"
    });
}