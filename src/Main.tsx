import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../css/index.css";
import "../css/esri-map.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <App />
);