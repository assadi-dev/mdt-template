import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllAcquisitions } from "./helpers";

export const retrieveAcquisitionsAsync = createAsyncThunk(
  "Acquisitions/all",
  async (payload) => {
    try {
      const { page, params } = payload;
      const res = await fetchAllAcquisitions(page, params);
      return res.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.data;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);
