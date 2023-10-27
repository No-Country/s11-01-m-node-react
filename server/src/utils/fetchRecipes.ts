import axios from "axios";

// Conecta con la api y devuelve una receta formateando los ingredientes y el tipo de  dieta. Devuelve un objeto con los datos de la receta
const fetchRecipesFromAPI = async (
	ingredients: string[],
	dietType: string
) => {
	try {
		const formattedIngredients = ingredients;
console.log(formattedIngredients)
		const URI = `${process.env.SEARCH_BYINGREDIENTS}?apiKey=${process.env.apiKey}&ingredients=${formattedIngredients}&diet=${dietType}`;
console.log(URI)
		const response = await axios.get(URI);
console.log(response)
		return response.data;
	} catch (error) {
		return error;
	}
};

export default fetchRecipesFromAPI;
