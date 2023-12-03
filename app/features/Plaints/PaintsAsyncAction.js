import { fetchPlaintsCollections } from "./helpers";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const retieavePlaintsAsync = createAsyncThunk(
  "Plaint/Collections",
  async (payload) => {
    try {
      const { page, params } = payload;
      const res = await fetchPlaintsCollections(page, params);
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
