import "./app.css";
import { useState, useEffect } from "preact/hooks";
import MobilePreview from "./components/mobile-preview";
import ViewSelector from "./components/view-selector";

function ViewParent({ children }) {
	return <div className="view-parent">{children}</div>;
}

export function App() {
	const [currentView, setCurrentView] = useState();

	useEffect(() => {
		if (window.location.hash.length === 0) {
			window.location.hash = "#hjem-skjerm";
		} else {
			handleHashChange();
		}

		function handleHashChange() {
			const newView = window.location.hash.substring(1);
			setCurrentView(newView);
		}

		window.addEventListener("hashchange", handleHashChange);

		return () => {
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, []);

	return (
		<ViewParent>
			<MobilePreview currentView={currentView} />
			<ViewSelector />
		</ViewParent>
	);
}
