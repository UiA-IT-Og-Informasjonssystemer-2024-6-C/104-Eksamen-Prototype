import views from "../views-data";

export default function ViewSelector() {
	return (
		<div>
			<h2>Velg en visning</h2>

			<ul>
				{Object.keys(views).map((view) => (
					<li key={view}>
						<a href={`#${view}`}>{views[view].name}</a>
					</li>
				))}
			</ul>
		</div>
	);
}
