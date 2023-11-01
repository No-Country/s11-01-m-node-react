import { Request, Response } from "express";
import { findByIngredients } from "../services/search.services";
// import { AppError } from "../utils/app.error";
import { getRecipeDetails } from "./recipes.controllers";
import APIKEY from "../utils/apikey.util";
import filterRecipesByDiet from "../utils/filterRecipes";
import { randomRecipeByDiet } from "../services/recipes.services";

// Captura los datos que envía el front
export const searchController = async (req: Request, res: Response) => {
      try {
        const ingredients = req.query.ingredientsSelected as string; // "tomato", "onion", "garlic"
        const diet = req.query.dietTypeSelected as string;
        let key = APIKEY.getKey()

        if (!ingredients || ingredients.length === 0) {
          return res.status(400).send({ error: "Ingredients are required." });
        }

        const results = await findByIngredients(ingredients, key);
        
        if (results instanceof Object && results.status === 402) {
          return res.status(402).json({ error: 'API Key limit reached' })
        }

        if (results instanceof String) res.status(500).json({ error: results });
        
        const recipeDetails = await Promise.all(
          results.map(async (recipe: any) => ({
            details: await getRecipeDetails(recipe.id, key),
          }))
        );

        const { filterRecipes: recipes, filterDetails: details } = filterRecipesByDiet(results, recipeDetails, diet)

        if (recipes.length === 0 || details.length === 0) {
          return res.send(await randomRecipeByDiet(diet, key))
        }

        //falta que devuelta las recetas

        return res.json({ recipes, details });
      } catch (error: any) {
        return res.status(500).json({ error: error.message });
      }
};
