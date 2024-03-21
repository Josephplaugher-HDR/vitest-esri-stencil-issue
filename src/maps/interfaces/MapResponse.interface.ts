import Measurement from "@arcgis/core/widgets/Measurement";
import IRegionListItem from "./Region.interface";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import MapView from "@arcgis/core/views/MapView";

export default interface IMapResponse {
    measurement: Measurement;
    regions: IRegionListItem[];
    regionLayer: FeatureLayer;
    view: MapView;
}