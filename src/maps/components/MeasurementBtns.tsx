import { useState } from "react";
import Measurement from "@arcgis/core/widgets/Measurement";

interface MeasurementParams {
    measure: Measurement;
}

export default function MeasurementBtns(props: MeasurementParams) {
    const measure = props.measure
    const [distanceActive, setDistanceActive] = useState("");
    const [areaActive, setAreaActive] = useState("");
    return (
        <>
            <button id="distance"
                className={`esri-widget--button esri-interactive esri-icon-measure-line ${distanceActive}`}
                onClick={() => {
                    measure.activeTool = "distance";
                    setDistanceActive("active");
                    setAreaActive("");
                }}></button>
            <button id="area"
                className={`esri-widget--button esri-interactive esri-icon-measure-area ${areaActive}`}
                onClick={() => {
                    measure.activeTool = "area";
                    setAreaActive("active");
                    setDistanceActive("");
                }}></button>
            <button id="clear"
                className="esri-widget--button esri-interactive esri-icon-trash"
                onClick={() => {
                    measure.clear();
                    setDistanceActive("");
                    setAreaActive("");
                }}></button>
        </>
    )
}