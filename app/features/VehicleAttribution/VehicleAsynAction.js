import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchVehicleAttributionCollection } from "./helper";

export const retrieveSanctionsAsync = createAsyncThunk(
  "VehicleAttribution/Collections",
  async (payload) => {
    try {
      const { page, params } = payload;
      const res = await fetchVehicleAttributionCollection(page, params);
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
