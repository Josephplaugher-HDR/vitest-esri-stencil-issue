import Expand from "@arcgis/core/widgets/Expand";
import MapView from "@arcgis/core/views/MapView";

export default function EsriMeasure(view: MapView, measureRef: any) {
    return new Expand({
        view,
        content: measureRef.current,
        expanded: false,
        expandIcon: 'measure',
        expandTooltip: "Measure tools",
        id: "2",
        group: "top-left"
    });
}