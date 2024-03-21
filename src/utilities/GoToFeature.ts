import Query from "@arcgis/core/rest/support/Query";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import MapView from "@arcgis/core/views/MapView";

export default function GoToFeature(mapLayer: FeatureLayer, view: MapView, Region_No: number) {
    const query = new Query();
    query.where = "Region_No = " + Region_No;
    query.outFields = ["*"];
    query.returnGeometry = true;
    mapLayer.queryExtent(query)
        .catch((error: any) => console.log(error))
        .then((f: any) => {
            view.goTo({ target: f.extent.extent })
        });
}