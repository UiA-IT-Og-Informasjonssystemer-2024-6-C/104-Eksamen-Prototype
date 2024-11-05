import "./login.css";

import AppBar from "../app-bar";
import Button from "../button";
import NavigationBar from "../navigation-bar";

import CompassUrl from "../../assets/Compass.png";

export default function Login() {
	return (
		<div>
			<NavigationBar />
			<img src={CompassUrl} alt="Matkompasset" />
			<h1>Matkompasset</h1>
			<h3>Login</h3>
			<div class="login-container">
				<div class="login-form">
					<label for="email">Epost</label>
					<input type="email" id="email" placeholder="Epost" />

					<label for="password">Passord</label>
					<input
						type="password"
						id="password"
						placeholder="Passord"
					/>

					<button type="submit">Logg inn</button>

					<div class="links">
						<a href="#">Glemt passord?</a>
						<a href="#">Lag Konto</a>
					</div>
				</div>
			</div>
			<AppBar />
		</div>
	);
}
