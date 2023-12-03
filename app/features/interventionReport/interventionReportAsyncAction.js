import { fetchinterventionReportCollection } from "./helpers";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const retrieveInterventionActionAsync = createAsyncThunk(
  "InterventionReport/Collections",
  async (payload) => {
    try {
      const { page, params } = payload;
      const res = await fetchinterventionReportCollection(page, params);
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
