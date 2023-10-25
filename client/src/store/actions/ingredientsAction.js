const INPUT_INGREDIENTS = "INPUT_INGREDIENTS"
import { createAction } from "@reduxjs/toolkit";

export const inputIngredients = createAction(INPUT_INGREDIENTS, (payload) => {

  console.log("Payload Action:", payload)

  return {
    type: INPUT_INGREDIENTS,
    payload,
  };
});

