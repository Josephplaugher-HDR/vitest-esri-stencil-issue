import MapView from "@arcgis/core/views/MapView";

export default class SaveCurrentView {
    view: MapView;
    url: string;
    constructor(view: MapView, url: string) {
        this.view = view
        if (url.includes("#")) {
            this.url = url.split("#")[0] // handles the # in the url used to scroll down to content
        } else {
            this.url = url.split("?")[0]
        }
    }

    getCenterArray(): number[] {
        const a = this.view.center.latitude
        const b = this.view.center.longitude
        return [a, b]
    }

    getZoom(): number {
        return this.view.zoom;
    }

    createLink(): string {
        const centerpoint = this.getCenterArray()
        const link = `${this.url}?lat=${centerpoint[0]}&lon=${centerpoint[1]}&zoom=${this.getZoom()}`;
        link.replace(/"/g, '&quot;');
        return link
    }

    saveLinkToClipboard(): void {
        navigator.clipboard.writeText(this.createLink());
    }

    openLinkFullScreen(): void {
        const link = this.createLink()
        const popoutlink = link + "&popout=true";
        window.open(popoutlink, '_blank');
    }
}