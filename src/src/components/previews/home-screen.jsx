import AppBar from "../app-bar";
import Button from "../button";
import NavigationBar from "../navigation-bar";
import TrashCan from "../../assets/trash-can.svg";

import { useState } from "preact/hooks";

function IngredientsList({ ingredients, setIngredients }) {
	return (
		<div style={{ minHeight: "450px" }}>
			{ingredients.map((ingredient, idx) => (
				<div key={idx} className="ingredient-card">
					<img
						src="https://dummyimage.com/100x100/"
						alt="placeholder"
					/>
					<div>
						<h4>{ingredient.name}</h4>
						<p>Allergener: {ingredient.allergies.join(", ")}</p>
					</div>
					<Button
						icon={TrashCan}
						onClick={() => {
							setIngredients(
								ingredients.filter((_, i) => i !== idx)
							);
						}}
					/>
				</div>
			))}
		</div>
	);
}

export default function HomeScreen() {
	const [ingredients, setIngredients] = useState([
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
	]);

	function addIngredient() {
		setIngredients([
			...ingredients,
			{
				name: "Ny ingrediens",
				allergies: [],
			},
		]);
	}

	return (
		<div>
			<NavigationBar />
			<div>
				<li
					className="flex-row centered"
					style={{ listStyleType: "none" }}
				>
					<Button text="Legg til" onClick={addIngredient} />
					<h4>Ingredientsliste</h4>
					<Button text="Kamera" onClick={addIngredient} />
				</li>
			</div>
			<div>
				<li style={{ listStyleType: "none" }}>
					<IngredientsList
						ingredients={ingredients}
						setIngredients={setIngredients}
					/>
				</li>
			</div>
			<AppBar />
		</div>
	);
}
