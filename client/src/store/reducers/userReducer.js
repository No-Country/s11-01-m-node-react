const LOGIN = "LOGIN";

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

const loginReducer = createReducer(initialState, (builder) => {
  builder.addCase(LOGIN, (state, { payload: { email, password } }) => {
      state.email = email;
      state.password = password;
    });
});

export default loginReducer;
