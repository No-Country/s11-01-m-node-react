const LOGIN = "LOGIN"

import { createAction } from "@reduxjs/toolkit";
import axios from "axios"

export const loginUser = createAction(LOGIN, (payload) => {

  console.log("Payload Action:", payload)
 
  return {
    type: LOGIN,
    payload,
  };
});