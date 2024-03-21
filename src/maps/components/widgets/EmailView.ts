import MapView from "@arcgis/core/views/MapView";
import Expand from "@arcgis/core/widgets/Expand";
import SaveCurrentView from "../../../utilities/SaveCurrentView";

export default function EmailView(view: MapView) {
    /*
    This function grabs the current view and builds a link to be shared
    with others, and adds to a mailto link
    */
    const message = `<div class="btn btn-secondary">Setting up an email for sharing...</div>`;
    const expand = new Expand({
        expandIcon: "envelope",
        view: view,
        content: message,
        expandTooltip: "Share Current View Via Email",
        id: "9",
        group: "top-right"
    });
    expand.watch("expanded", function () {
        const save = new SaveCurrentView(view, window.location.href);
        const link = save.createLink();
        const escapedLink = link.replaceAll("&", "%26")
        window.location.href = "mailto:?subject=Texas Water Board Map Link&body=" + escapedLink;
        setTimeout(() => {
            expand.collapse();
        }, 3000)
    });

    return expand;
}