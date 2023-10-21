import { Request, Response, NextFunction } from "express";
import { findByIngredients } from "../services/search.services";
import { AppError } from "../utils/app.error";
import axios from "axios";

const BASE_URL = "https://api.spoonacular.com/recipes/findByIngredients";
const apikey = "7c0de099cbec4506b68ca55c2a6775eb";
// Conecta con la api y devuelve una receta formateando los ingredientes y el tipo de  dieta. Devuelve un objeto con los datos de la receta
export const fetchRecipesFromAPI = async (
  ingredients: string[],
  dietType: string
) => {
  try {
    const formattedIngredients = ingredients;

    const URI = `${BASE_URL}?apiKey=${apikey}&ingredients=${formattedIngredients}&diet=${dietType}`;

    const response = await axios.get(URI);

    return response.data;
  } catch (error) {
    return error;
  }
};
// Captura los datos que envía el front
export const searchController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ingredients = req.body.ingredientsSelected as string[]; // ["tomato", "onion", "garlic"]
    if (!ingredients || ingredients.length === 0) {
      return res.status(400).send({ error: "Ingredients are required." });
    }
    const results = await findByIngredients(ingredients, "vegan"); // vacio

    //falta que devuelta las recetas

    return res.send(results);
  } catch (error) {
    if (!(error instanceof AppError)) {
      return res.status(500).json(error);
    }
    return next(error);
  }
};
