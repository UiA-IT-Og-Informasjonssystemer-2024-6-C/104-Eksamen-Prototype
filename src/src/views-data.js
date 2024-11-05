import HomeScreen from "./components/previews/home-screen";
import Login from "./components/previews/Login";
import RecipeList from "./components/previews/recipe-list";
import Settings from "./components/previews/Settings";
import RecipeFilter from "./components/previews/recipe-filter";
import RecipeDetails from "./components/previews/recipe-details";

export const views = {
	"hjem-skjerm": {
		name: "Hjem Skjerm og Ingrediens Liste",
		component: HomeScreen,
	},
	oppskriftsliste: {
		name: "Oppskriftsliste",
		component: RecipeList,
	},
	"oppskrifts-detaljer": {
		name: "Oppskrifts Detaljer",
		component: RecipeDetails,
	},
	"logg-inn": {
		name: "Logg Inn",
		component: Login,
	},
	innstillinger: {
		name: "Innstillinger",
		component: Settings,
	},
	"oppskriftsliste-filtrering": {
		name: "Oppskriftsliste Filtrering",
		component: RecipeFilter,
	},
};

export default views;
