import PopupTemplate from "@arcgis/core/PopupTemplate";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

const action: any = {
    title: "Download Model data",
    id: "download-model",
    image: "./object-3d-50.svg",
}
export default function EsriPopup(subLayer: FeatureLayer, fieldInfos: (o: any) => any, addAction: boolean | undefined) {
    const f = subLayer.fields ? subLayer.fields.map(fieldInfos) : null;
    return new PopupTemplate({
        title: subLayer.title,
        content: [{
            type: 'fields',
            fieldInfos: f
        }],
        actions: addAction === true ? [action] : undefined
    })
}