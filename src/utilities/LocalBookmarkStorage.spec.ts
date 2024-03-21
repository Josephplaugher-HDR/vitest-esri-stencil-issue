import { expectTypeOf, describe, expect, test } from "vitest";
import LocalBookmarkStorage from "./LocalBookmarkStorage";
import Bookmark from "@arcgis/core/webmap/Bookmark";
import Extent from "@arcgis/core/geometry/Extent";
import Geometry from "@arcgis/core/geometry/Geometry";
import 'mock-local-storage';

/*
I know that beforeEach() would ideally be used for the 
setup instead of the code that is run at the start of each test.
However, that seems to have problems when testing code involving
localStorage. The only way I could acheieve the localStorage.removeItem() effect
(so I could begin each test with an empty localStorage) was to ignore it and
instantiate a completely new mock of localStorage within each test.
*/
const extent = new Extent();
const viewpoint = {
    targetGeometry: extent
}
const initialBookmark = new Bookmark({ name: "New Bookmark", viewpoint });
const duplicateBookmark = new Bookmark({ name: "New Bookmark", viewpoint });
const uniqueBookmark = new Bookmark({ name: "Unique Bookmark", viewpoint });
const anotherUniqueBookmark = new Bookmark({ name: "Another Unique Bookmark", viewpoint });

describe("Local Bookmark Storage validation", () => {
    const storage = new LocalBookmarkStorage(localStorage, true);

    test("returns false if unique, and true if duplicate", () => {
        storage.add(initialBookmark);
        expect(storage.validate(uniqueBookmark)).toBe(false);
        expect(storage.validate(duplicateBookmark)).toBe(true);
    });
});

describe("Local Bookmark Storage addition", () => {
    const storage = new LocalBookmarkStorage(localStorage, true);

    test("add increases the total entries in local storage by one", () => {
        storage.add(initialBookmark);
        expect(storage.get().length).toBe(1);

        storage.add(uniqueBookmark);
        expect(storage.get().length).toBe(2);

        storage.add(anotherUniqueBookmark);
        expect(storage.get().length).toBe(3);
    });
});

describe("Local Bookmark Get Function", () => {
    const storage = new LocalBookmarkStorage(localStorage, true);

    test("to retrieve an object of type Esri Bookmark", () => {
        storage.add(initialBookmark);
        expectTypeOf(storage.getByName("New Bookmark")).toEqualTypeOf<Bookmark>();
        expect(initialBookmark).toEqual(storage.getByName("New Bookmark"));
    })
    test("to retrieve an object which includes an extent object", () => {
        storage.add(initialBookmark);
        const b: Bookmark = storage.getByName("New Bookmark");
        expectTypeOf(b.viewpoint.targetGeometry).toEqualTypeOf<Geometry>();
    })
})


describe("Local Bookmark Remove Function", () => {
    const storage = new LocalBookmarkStorage(localStorage, true);

    test("removed the bookmark by name", () => {
        storage.add(initialBookmark);
        storage.add(uniqueBookmark);
        expect(storage.get().length).toBe(2);

        storage.remove(uniqueBookmark.name);
        expect(storage.get().length).toBe(1);
        expect(storage.getByName(initialBookmark.name).name).toBe(initialBookmark.name)
    });
})