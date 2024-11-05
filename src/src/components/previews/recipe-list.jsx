import "./recipe-list.css";

import AppBar from "../app-bar";
import NavigationBar from "../navigation-bar";

export default function RecipeList() {
	return (
		<div>
			<NavigationBar />

			<div class="recipe-list-container">
				<div class="search-bar">
					<input type="text" placeholder="Søk etter oppskrifter" />
				</div>

				<div class="recipe-list">
					<div class="recipe-card">
						<div class="recipe-info">
							<h3>Pasta Bolognese</h3>
							<p>Veldig godt, nam nam!</p>
							<div class="time">
								<span>⏱ X-X min</span>
							</div>
						</div>
						<img
							src="https://dummyimage.com/100x100/"
							alt="Pasta Bolognese"
						/>
					</div>

					<div class="recipe-card">
						<div class="recipe-info">
							<h3>Pizza</h3>
							<p>Kjempegodt, nam nam!</p>
							<div class="time">
								<span>⏱ X-X min</span>
							</div>
						</div>
						<img
							src="https://dummyimage.com/100x100/"
							alt="Pizza"
						/>
					</div>

					<div class="recipe-card">
						<div class="recipe-info">
							<h3>Tomatsuppe</h3>
							<p>Helt ok, nam!</p>
							<div class="time">
								<span>⏱ X-X min</span>
							</div>
						</div>
						<img
							src="https://dummyimage.com/100x100/"
							alt="Tomatsuppe"
						/>
					</div>
				</div>
			</div>

			<AppBar />
		</div>
	);
}
