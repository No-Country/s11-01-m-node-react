/* const INPUT_INGREDIENTS = "INPUT_INGREDIENTS"; */

import { createReducer } from "@reduxjs/toolkit";
import { inputIngredients } from "../actions/ingredientsAction";

const initialState = {
  recipes: [],
  details: [],
};

const ingredientReducer = createReducer(initialState, (builder) => {
  builder.addCase(inputIngredients.fulfilled, (state, action) => {
    console.log("Payload Desde Reducer", action.payload);
    state.recipes = action.payload.recipes;
    state.details = action.payload.details;
    console.log("State desde reducer: ", state);
  });

  builder.addCase(inputIngredients.rejected, (state, action) => {
    console.log("Desde Reducer", action);
  });
});

export default ingredientReducer;
