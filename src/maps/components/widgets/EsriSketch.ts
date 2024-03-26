import Sketch from "@arcgis/core/widgets/Sketch";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Expand from "@arcgis/core/widgets/Expand";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";

export default function EsriSketch(map: Map, view: MapView) {
    const layer = new GraphicsLayer({ title: "Sketch Layer" });
    map.add(layer);

    return new Expand({
        view,
        content: new Sketch({ view, layer }),
        expanded: false,
        expandIcon: "pencil-mark",
        expandTooltip: "Sketch Tool",
        id: "7",
        group: "bottom-right"
    });
}