import MapConfig from "../../../views/map-config";
import LayerList from "@arcgis/core/widgets/LayerList";
import Expand from "@arcgis/core/widgets/Expand";
import MapView from "@arcgis/core/views/MapView";

function setPanelContent(item: any) {
    const legend = item.legend.map((l: any, i: any) => (
        <div className="esri-legend__layer-row" key={`legend-${l[i]}`}>
            <div className="esri-legend__layer-cell esri-legend__layer-cell--symbols">
                <img className="esri-legend__symbol"
                    alt={l[i].label}
                    src={`data: ${l[i].contentType};base64, ${l[i].imageData}`}
                    width={l[i].width}
                    height={l[i].height} />
                <div className="esri-legend__layer-cell esri-legend__layer-cell--info" >
                    {l[i].label}
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <div className="esri-lengend__layer-body">
                {legend}
            </div>
        </>
    )
}

export default function EsriLayerList(view: MapView) {
    const layerlist = new LayerList({
        view,
        visibilityAppearance: "checkbox",
        listItemCreatedFunction: function (event) {
            const item = event.item;
            item.open = false;
            if (item.layer.type !== 'map-image') {
                if (item.layer.type === 'feature') {
                    item.panel = {
                        className: 'esri-icon-legend',
                        content: 'legend',
                        open: false
                    }
                } else {
                    const found = MapConfig.Defaults.Legend.filter(function (o: any) {
                        return o.layerId === item.layer.id;
                    });
                    if (found.length > 0) {
                        const panel = setPanelContent(found[0])
                        item.panel = {
                            className: 'esri-icon-legend',
                            content: panel,
                            open: false
                        };
                    }
                }
            }
            item.actionsSections = [
                [
                    //{
                    //	title: 'Go to full extent',
                    //	className: 'esri-icon-zoom-out-fixed',
                    //	id: 'full-extent'
                    //},
                    {
                        title: 'Increase opacity',
                        className: 'esri-icon-up',
                        id: 'increase-opacity'
                    },
                    {
                        title: 'Decrease opacity',
                        className: 'esri-icon-down',
                        id: 'decrease-opacity'
                    }
                ]
            ];
        }

    });

    return new Expand({
        view,
        content: layerlist,
        expanded: false,
        expandTooltip: "View the map layers",
        id: "5",
        group: "top-right"
    });
}