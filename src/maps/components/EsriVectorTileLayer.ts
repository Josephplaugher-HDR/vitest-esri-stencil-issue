import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";

export default function EsriFeatureLayer(url: string, title: string) {
    return new VectorTileLayer({
        url,
        title,
    });
}