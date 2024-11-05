function AppBarItem({ label }) {
	return <li>{label}</li>;
}

export default function AppBar() {
	return (
		<div>
			<ol className="app-bar">
				<AppBarItem label="Innstillingar" />
				<AppBarItem label="Mine Ingredienser" />
				<AppBarItem label="Finn Oppskrifter" />
			</ol>
		</div>
	);
}
