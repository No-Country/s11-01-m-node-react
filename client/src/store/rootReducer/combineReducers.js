import { combineReducers } from "@reduxjs/toolkit";

import { inputIngredients } from "../actions/IngredientsAction";

const rootReducer = combineReducers({
  ingredients: inputIngredients,
});

export default rootReducer;