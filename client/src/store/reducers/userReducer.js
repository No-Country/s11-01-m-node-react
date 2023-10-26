const LOGIN = "LOGIN";

import { createReducer } from "@reduxjs/toolkit";
import { loginUser } from "../actions/loginUserAction";

const initialState = {
 token:""
};

export const loginReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginUser.fulfilled, (state, action) => {
      console.log("Login exitoso:", action.payload);
      state.token = action.payload.requestID
    })
    .addCase(loginUser.rejected, (state, action) => {
      console.error("Error en el login:", action.error);
      // Puedes lanzar el error nuevamente o manejarlo de alguna otra manera después de una solicitud fallida
    });
});

export default loginReducer;
