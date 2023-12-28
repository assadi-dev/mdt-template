import { fetchCodePenalCollections } from "./helpers";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const retrieveCodePenalCollectionsAsync = createAsyncThunk(
  "CodePenal/Collections",
  async (payload) => {
    try {
      const { page, params } = payload;
      const result = await fetchCodePenalCollections(page, params);
      return result.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        error.response.data
          ? (message = error.response.data)
          : error.response.data.detail;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);
