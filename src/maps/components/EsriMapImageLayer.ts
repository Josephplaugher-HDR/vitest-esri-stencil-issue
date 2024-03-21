import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export default function EsriMapImageLayer(url: any, title: any) {
    return new MapImageLayer({
        url,
        title,
        minScale: 0,
        maxScale: 0,
        visible: true
    });
}