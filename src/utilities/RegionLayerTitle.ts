import LabelClass from "@arcgis/core/layers/support/LabelClass.js";

export default function RegionLayerTitle() {
    return new LabelClass({
        labelExpressionInfo: { expression: "$feature.RFPG" },
        allowOverrun: true,
        symbol: {
            type: "text",  // autocasts as new TextSymbol()
            color: "black",
            font: {
                family: "Ariel",
                weight: "bold"
            }
        }
    });
}