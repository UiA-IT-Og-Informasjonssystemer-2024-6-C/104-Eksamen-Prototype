import "./index.css";
import { App } from "./app.jsx";
import { hydrate, prerender as ssr } from "preact-iso";

if (typeof window !== "undefined") {
	hydrate(<App />, document.getElementById("app"));
}

export async function prerender() {
	return await ssr(<App />);
}
