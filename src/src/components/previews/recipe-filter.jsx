import "./recipe-filter.css";

import NavigationBar from "../navigation-bar";
import AppBar from "../app-bar";

export default function RecipeFilter() {
	return (
		<div>
			<NavigationBar />
			<div class="filter-container">
				<div class="filter-section">
					<h3>Vanskelighetsgrad</h3>
					<div class="difficulty-level">
						<button>★☆☆</button>
						<button>★★☆</button>
						<button>★★★</button>
					</div>
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
					<div class="category-buttons">
						<button>Suppe</button>
						<button>Salat</button>
						<button class="active">Frokost</button>
						<button>Lunsj</button>
						<button>Middag</button>
						<button>Kveldsmat</button>
						<button>Vegetarisk</button>
						<button>Sjømat</button>
						<button>Biff</button>
						<button>Fisk</button>
						<button>Pasta</button>
					</div>
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
