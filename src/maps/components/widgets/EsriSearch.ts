import Search from "@arcgis/core/widgets/Search";
import MapView from "@arcgis/core/views/MapView";
import Expand from "@arcgis/core/widgets/Expand";

export default function EsriSearch(view: MapView) {
    const search = new Search({ view, includeDefaultSources: true });
    const searchWidget = new Expand({
        view,
        content: search,
        expanded: false,
        expandIcon: 'search',
        expandTooltip: "Search the map",
        id: "1",
        group: "top-right",
    });

    return { search, searchWidget }
}