import { fetchRecipesFromAPI } from "../controllers/search.controllers";

// Función para obtener las recetas

export const getRecipes = async (ingredients: string[], dietType: string) => {
  const res = await fetchRecipesFromAPI(ingredients, dietType);

  return res;
};

export const findByIngredients = async (
  ingredients: string[],
  dietType: string
) => {
  const res = await fetchRecipesFromAPI(ingredients, dietType); // entra a la funcion de fetchRecipesFromAPI

  return res;
};

// // Función para crear una receta
// export const createSearch = async (search: Search) => {
//   // const newSearch = await Search.create(search);
//   // return newSearch;
// }

// // Función para obtener todas las recetas
// export const getAllSearch = async () => {}
