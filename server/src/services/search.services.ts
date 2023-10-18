import { fetchRecipesFromAPI } from "../middlewares/spoonclarAPI.middleware";

// Definimos la interfaz para las recetas
interface Search {
  id: number;
  search: string;
  title: string;
  description: string;
  url: string;
  userId: string;
}

// Función para obtener las recetas

export const getRecipes = async (ingredients: string[], dietType: string) => {
  const res = await fetchRecipesFromAPI(ingredients, dietType);
  return res;
};

// // Función para crear una receta
// export const createSearch = async (search: Search) => {
//   // const newSearch = await Search.create(search);
//   // return newSearch;
// }

// // Función para obtener todas las recetas
// export const getAllSearch = async () => {}
