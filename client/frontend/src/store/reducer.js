// reducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const sampleSlice = createSlice({
  name: 'sample',
  initialState,
  reducers: {},
});

export const { reducer: sampleReducer } = sampleSlice;
