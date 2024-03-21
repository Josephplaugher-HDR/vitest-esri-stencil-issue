import Print from "@arcgis/core/widgets/Print";
import Expand from "@arcgis/core/widgets/Expand";
import MapView from "@arcgis/core/views/MapView";

export default function EsriPrint(view: MapView) {
    const print = new Print({
        view,
        printServiceUrl: import.meta.env.VITE_PRINT_URL,
        templateOptions: {
            title: "Texas Water Development Board",
            legendEnabled: true
        }
    });

    return new Expand({
        view,
        content: print,
        expanded: false,
        expandTooltip: "View Printing Tool",
        id: "2",
        group: "top-right"
    });
}