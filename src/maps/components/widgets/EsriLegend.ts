import Legend from "@arcgis/core/widgets/Legend";
import Expand from "@arcgis/core/widgets/Expand";
import MapView from "@arcgis/core/views/MapView";

export default function EsriLegend(view: MapView) {
    const legend = new Legend({
        view
    });

    return new Expand({
        view,
        content: legend,
        expanded: false,
        expandIcon: 'legend',
        expandTooltip: "View the map Legend",
        id: "3",
        group: "top-right"
    });
}