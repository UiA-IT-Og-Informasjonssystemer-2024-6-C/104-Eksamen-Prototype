import "./index.css";
import { App } from "./app.jsx";
import { hydrate } from "preact-iso";

if (typeof window !== "undefined") {
	hydrate(<App />, document.getElementById("app"));
}
