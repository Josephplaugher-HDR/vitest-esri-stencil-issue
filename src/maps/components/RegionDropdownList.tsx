import { Dispatch, SetStateAction } from "react";
import MapView from "@arcgis/core/views/MapView.js";
import { ESRI_VIEW_CENTER, ESRI_VIEW_ZOOM } from "../../utilities/Constants";
import IRegionListItem from "../interfaces/Region.interface";
import GoToFeature from "../../utilities/GoToFeature";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

interface IRegionParams {
    showRegionList: boolean;
    regionList: IRegionListItem[] | undefined;
    regionLayer: FeatureLayer | undefined;
    setShowRegionList: Dispatch<SetStateAction<boolean>>;
    view: MapView;
}

export default function RegionDropdownList(props: IRegionParams) {
    const regionDropdown = props.regionList ? props.regionList.map((r) =>
        <div className="dropdown-item px-4 py-2" role="button" key={r.Region_No}
            onClick={() => {
                props.setShowRegionList(false);
                props.regionLayer && GoToFeature(props.regionLayer, props.view, r.Region_No)
            }}
        >{r.Region_No} {r.RFPG}</div>
    ) : null;

    return (
        <div className="dropdown mb-3">
            <a className="dropdown-toggle bg-white text-black text-decoration-none p-2 me-3 rounded" role="button"
                onClick={() => props.setShowRegionList(!props.showRegionList)}>
                Regions
            </a>
            <ul className={`${props.showRegionList && "d-block"} dropdown-menu`}>
                <div className="dropdown-item px-4 py-2" role="button"
                    onClick={() => {
                        props.setShowRegionList(false);
                        props.view.zoom = ESRI_VIEW_ZOOM;
                        props.view.goTo({ center: ESRI_VIEW_CENTER });
                    }}
                >0 Statewide Texas</div>
                {props.showRegionList && regionDropdown}
            </ul>
        </div>
    )
}