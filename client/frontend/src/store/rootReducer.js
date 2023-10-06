// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import { sampleReducer } from './reducer';

const rootReducer = combineReducers({
  sample: sampleReducer,
  // Agrega más reducers aquí según sea necesario
});

export default rootReducer;
