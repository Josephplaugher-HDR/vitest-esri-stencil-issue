import Bookmarks from "@arcgis/core/widgets/Bookmarks";
import Expand from "@arcgis/core/widgets/Expand";
import MapView from "@arcgis/core/views/MapView";
import LocalBookmarkStorage from "../../../utilities/LocalBookmarkStorage";
import BookmarksViewModel from "@arcgis/core/widgets/Bookmarks/BookmarksViewModel";

export default function EsriBookmark(view: MapView) {
    const localBookmarks = new LocalBookmarkStorage(localStorage);
    const bookmarkWidget = new Bookmarks({
        view,
        // allows bookmarks to be added, edited, or deleted
        editingEnabled: true,
        visibleElements: {
            time: false // don't show the time (h:m:s) next to the date
        },
        bookmarks: localBookmarks.get(),
    });

    bookmarkWidget.bookmarks.on("before-add", function (evt) {
        const duplicate: boolean = localBookmarks.validate(evt.item);
        if (duplicate === true) {
            evt.preventDefault();
            alert("Please use a unique bookmark name");
        } else {
            localBookmarks.add(evt.item)
        }
    });

    bookmarkWidget.bookmarks.on("change", function (evt) {
        evt.removed.forEach(function (bookmark) {
            localBookmarks.remove(bookmark.name);
        });
        // leave this hanlder here for possible future use
        evt.moved.forEach(function (e) {
            console.log("Moved", e.name);
        });

    });

    bookmarkWidget.on("bookmark-select", function (event) {
        try {
            const b = localBookmarks.getByName(event.bookmark.name);
            view.goTo({ target: b.viewpoint.targetGeometry });
        } catch (e) {
            console.error("error on view.goto(): ", e);
        }
    });


    // not yet implemented. We may use this workflow for when someone shared a bookmark
    // with some one else.
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const bmvm = new BookmarksViewModel({ view });
    // bmvm.createBookmark()
    //   .then(function (bookmark) {
    //     // Give the bookmark a name
    //     bookmark.name = "Test Bookmark";
    //     // Add to bookmarks list
    //     bookmarks.bookmarks.add(bookmark);
    //   })
    //   .catch(error => console.error(error))

    return new Expand({
        view,
        content: bookmarkWidget,
        expanded: false,
        id: "6",
        group: "top-right"
    })
}