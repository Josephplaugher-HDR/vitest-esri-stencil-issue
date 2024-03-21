import EsriPopup from "../maps/components/EsriPopup";
import { RouteBasedEnum } from "./RouteBasedEnum";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

export default function SetPopups(subLayer: FeatureLayer) {
    /*
    Each map has slightly different requirements for popup format and behavior. This function
    has a separate "if" block for each view/map. Utilizing the RouteBasedEnum ensures that these "if"
    blocks will always match a specific route, as React Router (NavBar.tsx and App.tsx) also uses the RouteBasedEnum so a given
    route will always match a give "if" block below.
    The fieldInfos function in each block defines the data is is present in the popup for each map. the "action"
    boolean is a flag for whether the action should be included in the popup. The "action" is defined in EsriPopup.ts  
    */

    const currentMap: string = window.location.href.split("/")[3];
    let action;
    function OverviewFieldInfos(o: any) {
        return {
            fieldName: o.name,
            label: o.name
        }
    }

    function FloodriskFieldInfos(o: any) {
        if (subLayer.title != "ModelCoverage") {
            if (o.name != "OBJECTID") {
                return {
                    fieldName: o.name,
                    label: o.name
                }
            }
        } else if (subLayer.title == "ModelCoverage") {
            action = true;
            return {
                fieldName: o.name,
                label: o.name
            }
        }
    }

    function ProjectsFieldInfos(o: __esri.Field) {
        if (subLayer.title != "ModelCoverage") {
            return {
                fieldName: o.name,
                label: o.name
            }
        }
        if (subLayer.title.startsWith('FMS')) {
            if (o.name == "REMPOP100") {
                return {
                    fieldName: o.name,
                    label: "Population Removed from 1% Annual Flood Risk"
                }
            } else {
                return {
                    fieldName: o.name,
                    label: o.name
                }
            }
        }
    }

    function fieldInfos(o: any) {
        const mapResult = {
            fieldName: o.name,
            label: o.name
        }
        return mapResult
    }

    switch (currentMap) {
        case RouteBasedEnum.Overview:
            subLayer.set('popupTemplate', EsriPopup(subLayer, OverviewFieldInfos, false));
            break;
        case RouteBasedEnum.FloodRiskExisting:
        case RouteBasedEnum.FloodRiskFuture:
            action = false;
            subLayer.set('popupTemplate', EsriPopup(subLayer, FloodriskFieldInfos, action));
            break;
        case RouteBasedEnum.SolutionsFMP:
        case RouteBasedEnum.SolutionsFME:
        case RouteBasedEnum.SolutionsFMS:
            subLayer.set('popupTemplate', EsriPopup(subLayer, ProjectsFieldInfos, false));
            break;
        case RouteBasedEnum.Infrastructure:
        case RouteBasedEnum.PFMgnt:
        case RouteBasedEnum.MapData:
            action = subLayer.title === "ModelCoverage" && true;
            action = subLayer.title != "ModelCoverage" && false;
            subLayer.set('popupTemplate', EsriPopup(subLayer, fieldInfos, action));
            break;
    }
}