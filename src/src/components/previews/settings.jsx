import AppBar from "../app-bar";
import NavigationBar from "../navigation-bar";
import "./settings.css";

export default function Settings() {
	return (
		<div>
			<NavigationBar />

			<div class="container">
				<div class="title">Innstillinger</div>

				<div class="menu-item">
					<i class="icon-settings"></i>
					<span>Allergener</span>
				</div>

				<div class="menu-item">
					<i class="icon-globe"></i>
					<span>Språk</span>
				</div>

				<div class="menu-item">
					<i class="icon-bell"></i>
					<span>Varsler</span>
				</div>

				<div class="menu-item">
					<i class="icon-favorites"></i>
					<span>Favoritter</span>
				</div>

				<div class="menu-item">
					<i class="icon-user"></i>
					<span>Konto</span>
				</div>

				<div class="menu-item">
					<i class="icon-lock"></i>
					<span>Sikkerhet</span>
				</div>

				<div class="menu-item">
					<i class="icon-logout"></i>
					<span>Bytt konto/Logg ut</span>
				</div>
			</div>

			<AppBar />
		</div>
	);
}
