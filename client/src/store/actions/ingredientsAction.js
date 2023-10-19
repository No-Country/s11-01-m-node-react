const INPUT_INGREDIENTS = "INPUT_INGREDIENTS"

import { createAction } from "@reduxjs/toolkit";
import axios from "axios"

export const inputIngredients = createAction(INPUT_INGREDIENTS, (payload) => {

  console.log("Payload Action:", payload)

  return {
    payload,
  };
});

