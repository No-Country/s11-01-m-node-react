const LOGIN = "LOGIN"

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  user: {}
};

const loginReducer = createReducer(initialState, (builder) => {
  
  builder.addCase(LOGIN, (state, action) => {
    console.log(state, action)
    state = action.payload
    console.log(state, action)
  });
  
});

export default loginReducer;