import "./recipe-list.css";

import AppBar from "../app-bar";
import NavigationBar from "../navigation-bar";

function RecipeCard(props) {
	return (
		<div
			class="recipe-card"
			onClick={() => (window.location.href = "#oppskrifts-detaljer")}
		>
			<div class="recipe-info">
				<h3>{props.title}</h3>
				<p>{props.description}</p>
				<div class="time">
					<span>⏱ X-X min</span>
				</div>
			</div>
			<img src={props.image} alt={props.title} />
		</div>
	);
}

export default function RecipeList() {
	return (
		<div>
			<NavigationBar />

			<div class="recipe-list-container">
				<div class="search-bar">
					<input type="text" placeholder="Søk etter oppskrifter" />
				</div>

				<div class="recipe-list">
					<RecipeCard
						title="Pasta Bolognese"
						description="Veldig godt, nam nam!"
						image="https://dummyimage.com/100x100/"
					/>
					<RecipeCard
						title="Pizza"
						description="Kjempegodt, nam nam!"
						image="https://dummyimage.com/100x100/"
					/>
					<RecipeCard
						title="Tomatsuppe"
						description="Helt ok, nam!"
						image="https://dummyimage.com/100x100/"
					/>
				</div>
			</div>

			<AppBar />
		</div>
	);
}
