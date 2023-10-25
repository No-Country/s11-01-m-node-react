import { combineReducers } from "@reduxjs/toolkit";

import ingredientReducer from "../reducers/ingredientsReducer";
import loginReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  login: loginReducer
});

export default rootReducer;