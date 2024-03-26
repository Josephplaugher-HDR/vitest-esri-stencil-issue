import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

export default function EsriFeatureLayer(url: string, title: string) {
    return new FeatureLayer({
        url,
        title,
        minScale: 0,
        maxScale: 0,
        visible: true
    });
}