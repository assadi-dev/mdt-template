import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchIncidentReportCollection } from "./helpers";

export const retrieveIncidentActionAsync = createAsyncThunk(
  "IncindentReport/Collections",
  async (payload) => {
    try {
      const { page, params } = payload;
      const res = await fetchIncidentReportCollection(page, params);
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
