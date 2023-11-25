import { createAsyncThunk } from "@reduxjs/toolkit";
import {} from "./helpers";

export const fetchVehicleCivilCollectionAsync = createAsyncThunk(
  "WeaponEncoding/fetcCollections",
  async (payload) => {
    try {
      const { page, params } = payload;
      const res = await fetchWeaponCivilCollection();
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
