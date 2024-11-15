export default function NavigationBar() {
	return (
		<div className="navigation-bar">
			<div
				style={{ cursor: "pointer" }}
				onClick={() => window.history.back()}
			>
				Tilbake
			</div>
			<div>Matkompasset</div>
			<div
				style={{ cursor: "pointer" }}
				onClick={() => {
					window.location.href = "#logg-inn";
				}}
			>
				(Ikon)
			</div>
		</div>
	);
}
