import "./recipe-filter.css";

import NavigationBar from "../navigation-bar";
import AppBar from "../app-bar";

import { useState } from "preact/hooks";

function DifficultyButton({ level }) {
	const [active, setActive] = useState(false);

	return (
		<button
			className={active ? "active" : ""}
			onClick={() => setActive(!active)}
		>
			{level}
		</button>
	);
}

function DifficultyList() {
	return (
		<div class="difficulty-level">
			<DifficultyButton level="★☆☆" />
			<DifficultyButton level="★★☆" />
			<DifficultyButton level="★★★" />
		</div>
	);
}

function CategoryButton({ category, defaultOn }) {
	const [active, setActive] = useState(defaultOn ?? false);

	return (
		<button
			className={active ? "active" : ""}
			onClick={() => setActive(!active)}
		>
			{category}
		</button>
	);
}

function CategoryList() {
	return (
		<div class="category-buttons">
			<CategoryButton category="Suppe" />
			<CategoryButton category="Salat" />
			<CategoryButton category="Frokost" defaultOn={true} />
			<CategoryButton category="Lunsj" />
			<CategoryButton category="Middag" />
			<CategoryButton category="Kveldsmat" />
			<CategoryButton category="Vegetarisk" />
			<CategoryButton category="Sjømat" />
			<CategoryButton category="Biff" />
			<CategoryButton category="Fisk" />
			<CategoryButton category="Pasta" />
		</div>
	);
}

export default function RecipeFilter() {
	return (
		<div>
			<NavigationBar />
			<div class="filter-container">
				<div class="filter-section">
					<h3>Vanskelighetsgrad</h3>
					<DifficultyList />
				</div>

				<div class="filter-section">
					<h3>Rangering</h3>
					<input type="range" min="1" max="5" value="3" />
					<div class="rating-scale">
						<span>1</span>
						<span>2</span>
						<span>3</span>
						<span>4</span>
						<span>5</span>
					</div>
				</div>

				<div class="filter-section">
					<h3>Kategori</h3>
					<CategoryList />
				</div>

				<div class="filter-section">
					<h3>Mengde manglende ingredienser</h3>
					<input type="range" min="0" max="100" value="50" />
					<div class="range-scale">
						<span>0</span>
						<span>100</span>
					</div>
				</div>
			</div>
			<AppBar />
		</div>
	);
}
