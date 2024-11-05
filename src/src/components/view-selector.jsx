import views from "../views-data";

export default function ViewSelector() {
	return (
		<div>
			<h2>Velg en visning</h2>

			<ul>
				{views.map((view) => (
					<li key={view.anchor}>
						<a href={`#${view.anchor}`}>{view.name}</a>
					</li>
				))}
			</ul>
		</div>
	);
}
