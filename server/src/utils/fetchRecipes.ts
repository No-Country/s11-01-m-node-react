import axios from "axios";

// Conecta con la api y devuelve una receta formateando los ingredientes y el tipo de  dieta. Devuelve un objeto con los datos de la receta
const fetchRecipesFromAPI = async (ingredients: string, dietType: string, key: string) => {
  try {
    const formattedIngredients = ingredients;

    const URI = `${process.env.SEARCH_BYINGREDIENTS}?apiKey=${key}&ingredients=${formattedIngredients}&diet=${dietType}`;

    const response = await axios.get(URI);

    return response.data;
  } catch (error: any) {
    if (error.response) {
      return error.response
    }
    return 'Internal Server Error';
  }
};

export default fetchRecipesFromAPI;
