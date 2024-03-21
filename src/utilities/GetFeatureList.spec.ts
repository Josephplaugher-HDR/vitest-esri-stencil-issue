import { describe, test, expect } from "vitest";
import GetFeatureList from "./GetFeatureList";
import IRegionListItem from "../maps/interfaces/Region.interface";
import EsriFeatureLayer from "../maps/components/EsriFeatureLayer";
import MapConfig from "../views/map-config";
import RegionLayerTitle from "./RegionLayerTitle";

describe("Get Feature List", () => {
    const regionLayer = EsriFeatureLayer(
        MapConfig.Services.Regions.url,
        MapConfig.Services.Regions.title,
        RegionLayerTitle()
    );
    test("returns an array of Feature Layers", async () => {
        try {
            const regions: IRegionListItem[] = await GetFeatureList(regionLayer);
            expect(regions).toBeTruthy();
            expect(regions[0]).toHaveProperty("RFPG");
            expect(regions[0]).toHaveProperty("Region_No");
        } catch (e) {
            console.log("error getting feature list", e)
        }
    }, 10000)
})