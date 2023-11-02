import { createReducer } from "@reduxjs/toolkit";
import { detailRecipeAction } from "../actions/detailRecipeAction";



const initialState = {
  recipedetail: {}
};

const detailRecipeReducer = createReducer(initialState, (builder) => {
  builder.addCase(detailRecipeAction.fulfilled, (state, actions) => {
    console.log("Desde Reducer", actions.payload);
    state.recipedetail = actions.payload;
  });

  builder.addCase(detailRecipeAction.rejected, (state, actions) => {
    console.log("Desde Reducer", actions);
  });
});

export default detailRecipeReducer;