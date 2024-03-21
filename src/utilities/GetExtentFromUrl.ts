import { IGoTo } from "../maps/interfaces/IGoTo.interface";

export default function GetExtentFromUrl(URI: string): IGoTo | undefined {
    const url = new URL(URI);
    const lat = url.searchParams.get("lat");
    const lon = url.searchParams.get("lon");
    const zoomParam = url.searchParams.get("zoom");
    if (!lat || !lon || !zoomParam) return undefined
    let point: number[] = [];
    let zoom: number = 0;
    if (lat && lon) {
        point = [parseFloat(lat), parseFloat(lon)]
    }
    if (zoomParam) {
        zoom = parseInt(zoomParam);
    }
    return { point, zoom }
}