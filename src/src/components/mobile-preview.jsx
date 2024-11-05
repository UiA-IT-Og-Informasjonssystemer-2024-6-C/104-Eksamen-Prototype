import views from "../views-data";

export default function MobilePreview({ currentView }) {
	return (
		<div>
			{views[currentView] ? (
				views[currentView].component()
			) : (
				<p>Ukjent visning</p>
			)}
		</div>
	);
}
