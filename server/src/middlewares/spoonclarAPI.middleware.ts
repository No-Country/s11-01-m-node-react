import axios from "axios";
import { NextFunction, Request, Response } from "express";
import ERROR_MSGS from "../constants/errorMsgs";
import { HTTPCODES } from "../constants/httpCodes";
import { AppError } from "../utils/app.error";

const BASE_URL = "https://api.spoonacular.com/recipes/findByIngredients";
const API_KEY = process.env.API_KEY;

export const fetchRecipesFromAPI = async (
  ingredients: string[],
  dietType: string
) => {
  const formattedIngredients = ingredients.join(",+").replace(/ /g, "%20");
  const URI = `${BASE_URL}?apiKey=${API_KEY}&ingredients=${formattedIngredients}&diet=${dietType}`;
  const response = await axios.get(URI);
  return response.data;
};

export const getIngredients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { ingredients, dietTypeSelected } = req.body;

    const data = await fetchRecipesFromAPI(ingredients, dietTypeSelected);

    res.status(HTTPCODES.OK).json({
      status: "success",
      data,
    });
  } catch (error) {
    if (!(error instanceof AppError)) {
      next(
        new AppError(ERROR_MSGS.INTERNAL_SERVER_ERROR, HTTPCODES.BAD_REQUEST)
      );
    } else {
      next(error);
    }
  }
};
