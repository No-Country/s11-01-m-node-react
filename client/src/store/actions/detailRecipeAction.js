// Constante que representa la acción de ingresar ingredientes
const DETAIL_RECIPE = "DETAIL_RECIPE";
// Importación de bibliotecas y funciones necesarias
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// URL de la API a la que se realizarán las solicitudes
const url = "https://api.spoonacular.com/recipes";
const api = "apiKey=a1707b8cc81c4521b3c577ebfbf8ae9e"
//https://api.spoonacular.com/recipes/631757/information?apiKey=807497155ff343caa4fdf8ca088f7b18


// Acción asíncrona creada con createAsyncThunk para manejar la entrada de ingredientes
export const detailRecipeAction = createAsyncThunk(
  DETAIL_RECIPE,
  async (payload) => {
    console.log(`${url}/${payload}/information?${api}`)
   
    try {
      // Realizar una solicitud GET a la URL de búsqueda con la cadena de consulta
      const response = await axios({
        method: "get",
        url: `${url}/${payload}/information?${api}`,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      return(response.data)
      // Imprimir la respuesta en la consola (opcional, para propósitos de depuración)
      
    } catch (error) {
      // Capturar y manejar cualquier error en la solicitud
      console.error("Error en la solicitud:", error);
      // Relanzar el error para que pueda ser manejado por el código que llamó a esta acción
      throw error;
    }
  }
);
