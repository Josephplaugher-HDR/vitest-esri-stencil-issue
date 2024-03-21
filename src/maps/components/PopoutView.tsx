import MeasurementBtns from "./MeasurementBtns";

interface IPopoutViewProps {
    mapContainer: React.MutableRefObject<any>;
    measureRef: React.MutableRefObject<any>;
    measure: __esri.Measurement;
}

export default function PopoutView(props: IPopoutViewProps) {
    return (
        <div ref={props.mapContainer} className="map-container" style={{ top: "10vh", position: "relative" }}>
            <div ref={props.measureRef} id="measureTools" className="esri-component esri-widget">
                <MeasurementBtns measure={props.measure} />
            </div>
        </div>
    )
}