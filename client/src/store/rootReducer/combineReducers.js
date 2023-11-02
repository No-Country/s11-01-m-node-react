import { combineReducers } from "@reduxjs/toolkit";

import ingredientReducer from "../reducers/ingredientsReducer";
import loginReducer from "../reducers/userReducer";
import detailRecipeReducer from "../reducers/detailRecipeReducer";

const rootReducer = combineReducers({
  detailRecipe: detailRecipeReducer,
  ingredients: ingredientReducer,
  login: loginReducer,
});

export default rootReducer;
