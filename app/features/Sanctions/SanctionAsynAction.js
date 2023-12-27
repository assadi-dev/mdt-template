import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSanctionCollections } from "./helpers";

export const retrieveSanctionsAsync = createAsyncThunk(
  "Plaint/Collections",
  async (payload) => {
    try {
      const { page, params } = payload;
      const res = await fetchSanctionCollections(page, params);
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
