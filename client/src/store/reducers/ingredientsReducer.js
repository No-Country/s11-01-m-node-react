const INPUT_INGREDIENTS = "INPUT_INGREDIENTS"

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  ingredients: [],
};

const ingredientReducer = createReducer(initialState, (builder) => {
  
  builder.addCase(INPUT_INGREDIENTS, (state, action) => {
    state = action.payload
  });
  
});

export default ingredientReducer

