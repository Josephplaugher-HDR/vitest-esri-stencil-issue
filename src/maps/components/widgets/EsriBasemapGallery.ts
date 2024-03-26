import Expand from "@arcgis/core/widgets/Expand";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import MapView from "@arcgis/core/views/MapView";

export default function EsriBasemapGallery(view: MapView) {
    return new Expand({
        view,
        expandTooltip: "View Base Map Gallery",
        content: new BasemapGallery({ view }),
        id: "4",
        group: "top-right"
    });
}