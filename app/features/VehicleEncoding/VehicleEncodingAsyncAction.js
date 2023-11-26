import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchVehicleCivilCollection } from "./helpers";

export const fetchVehicleCivilCollectionAsync = createAsyncThunk(
  "WeaponEncoding/fetcCollections",
  async (payload) => {
    try {
      const { page, params } = payload;
      const res = await fetchVehicleCivilCollection(page, params);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
