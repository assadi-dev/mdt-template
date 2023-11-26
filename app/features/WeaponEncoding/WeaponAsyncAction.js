import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeaponCivilCollection } from "./helpers";

export const retieaveWeaponEncodingAsync = createAsyncThunk(
  "WeaponEncoding/fetcCollections",
  async (payload) => {
    try {
      const { page, params } = payload;
      const res = await fetchWeaponCivilCollection(page, params);
      return res.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
