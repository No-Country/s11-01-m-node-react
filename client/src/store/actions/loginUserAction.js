const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const LOGOUT = "LOGOUT";

import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://s11-01-m-node-react-production.up.railway.app/v1/auth";

export const loginUser = createAsyncThunk(LOGIN, async (payload) => {
  console.log("login:", payload);
  const DATA = {
    email: payload.email,
    password: payload.password,
  };

  try {
    const response = await axios.post(`${url}/login`, DATA);
    console.log("desde Action", response);
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
});

export const registerUser = createAsyncThunk(REGISTER, async (payload) => {
  console.log("login:", payload);
  const DATA = {
    email: payload.email,
    password: payload.password,
  };

  try {
    const response = await axios.post(`${url}/register`, DATA);
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
});

export const logOutUser = createAsyncThunk(LOGOUT, async () => {
  try {
    const response = await axios.post(`${url}/logout`);
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
});
