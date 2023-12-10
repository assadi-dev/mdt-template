import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGunFightReportCollections } from "./helpers";

export const retrieveGunFightReportAsync = createAsyncThunk(
  "GunFightReport/Collections",
  async (payload) => {
    try {
      const { page, params } = payload;
      const res = await fetchGunFightReportCollections(page, params);
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
