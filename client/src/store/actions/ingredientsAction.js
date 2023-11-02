// Constante que representa la acción de ingresar ingredientes
const INPUT_INGREDIENTS = "INPUT_INGREDIENTS";

// Importación de bibliotecas y funciones necesarias

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// URL de la API a la que se realizarán las solicitudes
const url = "https://s11-01-m-node-react-production.up.railway.app/v1";

// Acción asíncrona creada con createAsyncThunk para manejar la entrada de ingredientes
export const inputIngredients = createAsyncThunk(
  INPUT_INGREDIENTS,
  async (payload) => {
    console.log(payload)
    // Convertir el objeto de ingredientes en una cadena de consulta
    const queryString = Object.entries(payload).map(([clave, valor]) => {
      if (Array.isArray(valor)) {
        // Si el valor es un array, unir los elementos con comas
        return `${encodeURIComponent(clave)}=${valor.map(encodeURIComponent).join(',')}`;
      } else {
        // Si no es un array, simplemente codificar el valor
        return `${encodeURIComponent(clave)}=${encodeURIComponent(valor)}`;
      }
    })
    .join('&');

    
    // Imprimir la cadena de consulta en la consola (opcional, para propósitos de depuración)
    

    try {
      // Realizar una solicitud GET a la URL de búsqueda con la cadena de consulta

      const data = {
        details: [],
        recipes: [], 
        diet: ""
      }

      const response = await axios({
        method: "get",
        url: `${url}/search?${queryString}`,
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      console.log(response);
      data.recipes = response.data.recipes;
      data.details = response.data.details
      data.diet = response.data

      console.log(data)
      return(data)
      // Imprimir la respuesta en la consola (opcional, para propósitos de depuración)
      
    } catch (error) {
      // Capturar y manejar cualquier error en la solicitud
      console.error("Error en la solicitud:", error);
      // Relanzar el error para que pueda ser manejado por el código que llamó a esta acción
      throw error;
    }
  }
);
