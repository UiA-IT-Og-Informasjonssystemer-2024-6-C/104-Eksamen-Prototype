import "./recipe-details.css";
import NavigationBar from "../navigation-bar";
import AppBar from "../app-bar";

export default function RecipeDetails() {
	return (
		<div>
			<NavigationBar />
			<div class="recipe-container">
				<h1>Pizza</h1>

				<div class="image-and-info">
					<img src="https://dummyimage.com/400x400/" alt="Pizza" />
					<p class="description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nullam dictum dui sit amet pretium elementum.
					</p>
				</div>

				<div class="details">
					<div class="time-difficulty">
						<div class="time">
							<span>⏰</span>
							<span>1 time og 20 minutter</span>
						</div>
						<div class="rating">
							<span>★★★★★</span>
						</div>
						<div class="difficulty">Medium Difficulty</div>
						<div class="favorite">❤️</div>
					</div>
				</div>

				<div class="content">
					<div class="ingredients">
						<h2>Ingrediensliste</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Maecenas velit est.
						</p>
					</div>
					<div class="instructions">
						<h2>Oppskrift</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Maecenas velit est,
						</p>
					</div>
				</div>
			</div>

			<AppBar />
		</div>
	);
}
