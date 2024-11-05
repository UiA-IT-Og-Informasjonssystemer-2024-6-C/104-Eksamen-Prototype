import AppBar from "../app-bar";
import Button from "../button";
import NavigationBar from "../navigation-bar";

function IngredientsList() {
	// one ingredients is a card, which contains an image, a name, alergies, and a button to delete.
	// image is just a placeholder for now

	const ingredients = [
		{
			name: "Egg",
			allergies: ["egg"],
		},
		{
			name: "Melk",
			allergies: ["milk"],
		},
		{
			name: "Gluten",
			allergies: ["gluten"],
		},
	];

	return (
		<div>
			{ingredients.map((ingredient) => (
				<div key={ingredient.name} className="ingredient-card">
					<img
						src="https://via.placeholder.com/150"
						alt="placeholder"
					/>
					<div>
						<h4>{ingredient.name}</h4>
						<p>Allergies: {ingredient.allergies.join(", ")}</p>
					</div>
					<Button text="Slett" />
				</div>
			))}
		</div>
	);
}

export default function HomeScreen() {
	return (
		<div>
			<NavigationBar />
			<div>
				<li
					className="flex-row centered"
					style={{ listStyleType: "none" }}
				>
					<Button text="Legg til" />
					<h4>Ingredientsliste</h4>
					<Button text="Kamera" />
				</li>
			</div>
			<div>
				<li style={{ listStyleType: "none" }}>
					<IngredientsList />
				</li>
			</div>
			<AppBar />
		</div>
	);
}
