import MapView from "@arcgis/core/views/MapView";
import Expand from "@arcgis/core/widgets/Expand";
import SaveCurrentView from "../../../utilities/SaveCurrentView";

export default function PopoutMap(view: MapView) {
    const expand = new Expand({
        expandIcon: "launch",
        view: view,
        // content: message,
        expandTooltip: "Popout Full-Screen",
        id: "10",
        group: "top-right"
    });
    expand.watch("expanded", function () {
        const popout = new SaveCurrentView(view, window.location.href);
        popout.openLinkFullScreen();
        expand.collapse();
    });
    return expand;
}