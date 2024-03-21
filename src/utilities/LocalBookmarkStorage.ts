import Bookmark from "@arcgis/core/webmap/Bookmark.js";
import Extent from "@arcgis/core/geometry/Extent.js";

interface ILocalStorageBookmark {
    name: string;
    extent: Extent;
    thumbnail: object;
}
export default class LocalBookmarkStorage {
    storage;
    localStorageIdentifier = "tx-water-bookmarks";
    esriBookmarks: Bookmark[];
    localStorageBookmarks: ILocalStorageBookmark[];
    constructor(localStorage: Window["localStorage"], testing?: boolean) {
        this.storage = localStorage;
        // optional parameter for identifier used for testing.
        // do not pass a parameter except when testing.
        if (testing) this.localStorageIdentifier = "test-tx-water-bookmarks";

        this.esriBookmarks = [];
        this.localStorageBookmarks = [];
        const dataString = this.storage.getItem(this.localStorageIdentifier);
        if (dataString) {
            this.localStorageBookmarks = JSON.parse(dataString);
            this.localStorageBookmarks.forEach((b: ILocalStorageBookmark) => {
                const B = new Bookmark({
                    name: b.name,
                    viewpoint: {
                        targetGeometry: Extent.fromJSON(b.extent)
                    },
                    thumbnail: b.thumbnail
                })
                this.esriBookmarks.push(B)
            });
        }
    }

    validate(item: Bookmark): boolean {
        // returns true is the bookmark being added is a duplicate, false if it is new
        return this.esriBookmarks.some((b: Bookmark) => b.name == item.name);
    }

    add(item: Bookmark): void {
        const name = item.name;
        const extent = item.viewpoint.targetGeometry.extent.toJSON()
        const lsbm: ILocalStorageBookmark = { name, extent, thumbnail: item.thumbnail }

        this.localStorageBookmarks.push(lsbm);
        this.esriBookmarks.push(item);
        this.storage.setItem(
            this.localStorageIdentifier,
            JSON.stringify(this.localStorageBookmarks)
        );
    }

    get(): Bookmark[] {
        return this.esriBookmarks;
    }

    getByName(name: string): Bookmark {
        return this.esriBookmarks.filter(b => b.name == name)[0];
    }

    remove(nameToRemove: string) {
        const newBookmarks: ILocalStorageBookmark[] = [];
        const newEsriBookmarks: Bookmark[] = [];
        this.localStorageBookmarks.forEach(existingBookmarks => {
            if (existingBookmarks.name != nameToRemove) {
                newBookmarks.push(existingBookmarks);
                const B = new Bookmark({
                    name: existingBookmarks.name,
                    viewpoint: {
                        targetGeometry: Extent.fromJSON(existingBookmarks.extent)
                    },
                    thumbnail: existingBookmarks.thumbnail
                })
                newEsriBookmarks.push(B)
            }
        });
        this.esriBookmarks = [];
        this.esriBookmarks = newEsriBookmarks;
        this.storage.setItem(this.localStorageIdentifier, JSON.stringify(newBookmarks));
    }

    removeAll(): void {
        this.storage.removeItem(this.localStorageIdentifier);
    }
}
