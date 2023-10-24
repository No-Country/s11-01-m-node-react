import { NextFunction, Request, Response } from "express";
import fetchRecipes from "../utils/fetchRecipes";
import { ERROR_MSGS } from "../constants/errorMsgs";
import { HTTPCODES } from "../constants/httpCodes";
import { AppError } from "../utils/app.error";

// Capturar los datos que envia el front
export const getIngredients = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { ingredients, dietTypeSelected } = req.body;
    const data = await fetchRecipes(ingredients, dietTypeSelected);

    return res.status(HTTPCODES.OK).json({
      status: "success",
      data,
    });
  } catch (error) {
    if (!(error instanceof AppError)) {
      return next(new AppError(ERROR_MSGS.SERVER_ERROR, HTTPCODES.BAD_REQUEST));
    } else {
      return next(error);
    }
  }
};
