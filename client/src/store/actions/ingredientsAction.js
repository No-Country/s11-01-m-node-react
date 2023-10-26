const INPUT_INGREDIENTS = "INPUT_INGREDIENTS";

import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://s11-01-m-node-react-production.up.railway.app/v1";

export const inputIngredients = createAsyncThunk(
  INPUT_INGREDIENTS,
  async (payload) => {
    console.log("payload:", payload);
    console.log(`url: ${url}/search/`, payload);

    const DATA = {
      "dietTypeSelected" : payload.dietTypeSelected,
      "ingredientsSelected" : payload.ingredientSelected
    }

    console.log(DATA)

    try {
      const response = await axios.get(`${url}/search/`, DATA);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error en la solicitud:", error);
      throw error;
    }
  }
);
