import Map from "@arcgis/core/Map";

export default function EsriMap() {
    return new Map({
        basemap: "arcgis-topographic" // Basemap layer service
    });
}