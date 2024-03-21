import { describe, test, expect, vi } from "vitest";
import GoToFeature from "./GoToFeature";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import MapView from "@arcgis/core/views/MapView";
import EsriMap from "../maps/components/EsriMap";

const feature = new FeatureLayer({
    url: "https://maps.hdrgateway.com/arcgis/rest/services/Texas/TWDB_Regions/MapServer",
    title: "Texas Water Board regions",
});
const map = EsriMap();
map.add(feature)
const view = new MapView({ map })

describe("Go to feature", () => {
    test("executes goTo view", async () => {
        GoToFeature(feature, view, 2);
        setTimeout(() => {
            expect(view.goTo).toHaveBeenCalled();
        }, 100);
    });
});