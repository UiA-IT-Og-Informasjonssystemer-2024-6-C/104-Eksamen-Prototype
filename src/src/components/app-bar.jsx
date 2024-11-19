function AppBarItem({ label, href }) {
	return (
		<li>
			<a href={`#${href}`}>{label}</a>
		</li>
	);
}

export default function AppBar() {
	return (
		<div>
			<ol className="app-bar">
				<AppBarItem label="Innstillinger" href={"innstillinger"} />
				<AppBarItem label="Mine Ingredienser" href={"hjem-skjerm"} />
				<AppBarItem label="Finn Oppskrifter" href={"oppskriftsliste"} />
			</ol>
		</div>
	);
}
