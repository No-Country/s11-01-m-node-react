import { NextFunction, Request, Response } from "express";
import { findByIngredients } from "../services/search.services";
import { AppError } from "../utils/app.error";
import { getRecipeDetails } from "./recipes.controllers";


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
    const recipeDetails = await Promise.all(results.map(async (recipe: any) => ({
      details: await getRecipeDetails(recipe.id)
    })))


    //falta que devuelta las recetas

    return res.send({ results, recipeDetails });
  } catch (error) {
    if (!(error instanceof AppError)) {
      return res.status(500).json(error);
    }
    return next(error);
  }
};