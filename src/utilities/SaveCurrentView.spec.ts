import { describe, test, expectTypeOf, expect, vi } from "vitest";
import SaveCurrentView from "./SaveCurrentView";
import MapView from "@arcgis/core/views/MapView";
import View from "./mockfiles/MapViewMock";

let view: MapView = new View();
vi.mock("@arcgis/core/views/MapView", async () => {
    view = new View();
});

const url = "http://localhost:3001/infrastructure/?lat=31.453739168381087&lon=-100.4263599963437&zoom=13";
const V = new SaveCurrentView(view, url);
const center: number[] = V.getCenterArray();

describe("SaveCurrentView.getStringifiedCenter ", () => {
    test("returns an extent string", () => {
        expectTypeOf(center).toMatchTypeOf<number[]>();
        expectTypeOf(center[0]).toMatchTypeOf<number>();
        expectTypeOf(center[1]).toMatchTypeOf<number>();
    });
});

describe("SaveCurrentView.createLink ", () => {
    test("returns a url with lat, lon, and zoom parameters", () => {
        const uri: string = V.createLink();
        expect(uri).toContain("lat")
        expect(uri).toContain("lon")
        expect(uri).toContain("zoom")
        expect(uri).toContain("?")
    });
});

// skipping this test for now. Test needs to simulate a secure connection
// for the clipboad function to work
describe.skip("SaveCurrentView.saveLinkToClipboard ", () => {
    test("saves link to clipboard", () => {
        V.saveLinkToClipboard();
        navigator.clipboard.read().then((data) => {
            const createdLink = V.createLink();
            expect(data).toEqual(createdLink);
        });
    });
});