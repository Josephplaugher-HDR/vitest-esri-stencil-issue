import { useEffect, useState } from "react";
import IRegionListItem from "../interfaces/Region.interface";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import IMapParams from "../interfaces/MapParams.interface";

export default function useSetupRegionDropdown(Map: any, mapParams: IMapParams, setMeasure: React.SetStateAction<any>) {
    const [regionList, setRegionList] = useState<IRegionListItem[]>();
    const [regionLayer, setRegionLayer] = useState<FeatureLayer>();
    const [view, setView] = useState();
    const [showRegionList, setShowRegionList] = useState<boolean>(false);

    useEffect(() => {
        const mapResult = Map(mapParams, setRegionList);
        mapResult.then((result: any) => {
            setRegionList(result.regions);
            setMeasure(result.measurement);
            setRegionLayer(result.regionLayer);
            setView(result.view);
        })
    }, [])

    return { regionList, regionLayer, view, showRegionList, setShowRegionList }
}