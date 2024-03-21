import MapView from "@arcgis/core/views/MapView";
import { IGoTo } from "../maps/interfaces/IGoTo.interface";
import GetExtentFromUrl from "./GetExtentFromUrl";
import Point from "@arcgis/core/geometry/Point";

export default function SharedView(view: MapView | undefined) {
    const GoTo: IGoTo | undefined = GetExtentFromUrl(window.location.href);
    if (GoTo) {
        view?.when(() => {
            const c = new Point({ latitude: GoTo.point[0], longitude: GoTo.point[1] })
            view?.goTo({ center: c, zoom: GoTo.zoom })
                .catch(function (error) {
                    if (error.name != "AbortError") {
                        console.error(error);
                    }
                });
        })
    }
}