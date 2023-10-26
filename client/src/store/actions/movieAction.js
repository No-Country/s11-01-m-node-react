import { createAsyncAction } from "@reduxjs/toolkit";
import axios from "axios";

export const loadData = createAsyncAction("LOAD_DATA", async (payload) => {
  const response = await axios.get("https://example.com/data");
  const data = await response.data;

  return {
    type: "LOAD_DATA",
    payload: data,
  };
});

