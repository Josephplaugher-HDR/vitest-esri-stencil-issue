import renderer from "react-test-renderer";
import { describe, expect, it, vi } from "vitest";
import RegionDropdownList from "./RegionDropdownList";
import IRegionListItem from "../interfaces/Region.interface";
import GetFeatureList from "../../utilities/GetFeatureList";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import MapView from "@arcgis/core/views/MapView";
import View from "../../utilities/mockfiles/MapViewMock";

const feature = new FeatureLayer({
    url: "https://maps.hdrgateway.com/arcgis/rest/services/Texas/TWDB_Regions/MapServer",
    title: "Texas Water Board regions",
});

let view: MapView;
vi.mock("@arcgis/core/views/MapView", async () => {
    view = new View();
});

describe("RegionDropdownList", async () => {
    const regionList: IRegionListItem[] = await GetFeatureList(feature);
    it("creates an instance", () => {
        const component = renderer.create(
            <RegionDropdownList regionLayer={feature} regionList={regionList} showRegionList={true} setShowRegionList={() => { }} view={view} />
        );
        expect(component).toBeTruthy();
    });
});