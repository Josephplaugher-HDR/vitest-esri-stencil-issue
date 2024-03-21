import Query from "@arcgis/core/rest/support/Query";
import IRegionListItem from "../maps/interfaces/Region.interface";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

export default function GetFeatureList(mapLayer: FeatureLayer): Promise<IRegionListItem[]> {
    return new Promise((resolve, reject) => {
        const returnObj: IRegionListItem[] = [];

        const query = new Query();
        query.where = "1=1";
        query.orderByFields = ["Region_No"];
        query.outFields = ["*"];
        query.returnGeometry = true;
        mapLayer.queryFeatures(query)
            .catch((error: any) => reject(error))
            .then((f: any) => {
                f.features.forEach((f: any) => {
                    returnObj.push({ RFPG: f.attributes.RFPG, Region_No: f.attributes.Region_No });
                });
                resolve(returnObj);
            })
    });
}