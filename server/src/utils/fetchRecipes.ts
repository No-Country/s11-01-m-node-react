import axios from "axios";

// Conecta con la api y devuelve una receta formateando los ingredientes y el tipo de  dieta. Devuelve un objeto con los datos de la receta
const fetchRecipesFromAPI = async (
	ingredients: string[],
	dietType: string
) => {
	try {
		const formattedIngredients = ingredients;

		const URI = `${process.env.SEARCH_BYINGREDIENTS}?apiKey=${process.env.apikey}&ingredients=${formattedIngredients}&diet=${dietType}`;

		const response = await axios.get(URI);

		return response.data;
	} catch (error) {
		return error;
	}
};

export default fetchRecipesFromAPI;
