import MapView from "@arcgis/core/views/MapView";
import Expand from "@arcgis/core/widgets/Expand";
import SaveCurrentView from "../../../utilities/SaveCurrentView";

export default function ShareView(view: MapView) {
    /*
    This function grabs the current view and builds a link to be shared
    with others
    */
    const message = `<div class="btn btn-secondary">Map view copied to clipboard</div>`;

    const expand = new Expand({
        expandIcon: "share",
        view: view,
        content: message,
        expandTooltip: "Copy Link To Current View",
        id: "8",
        group: "top-right"
    });
    expand.watch("expanded", function () {
        const save = new SaveCurrentView(view, window.location.href);
        save.saveLinkToClipboard();
        setTimeout(() => {
            expand.collapse();
        }, 3000)
    });
    return expand;
}