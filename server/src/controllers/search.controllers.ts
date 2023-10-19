import { Request, Response, NextFunction } from "express";
import { findByIngredients } from "../services/search.services";
import { AppError } from "../utils/app.error";
import { ERROR_MSGS } from "../constants/errorMsgs";

export const searchController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ingredients = req.query.ingredients as string[];
    if (!ingredients || ingredients.length === 0) {
      return res.status(400).send({ error: "Ingredients are required." });
    }
    const results = await findByIngredients(ingredients, "vegetarian");
    return res.send(results);
  } catch (error) {
    if (!(error instanceof AppError)) {
      return next(new AppError(ERROR_MSGS.SERVER_ERROR, 500));
    }
    return next(error);
  }
};
