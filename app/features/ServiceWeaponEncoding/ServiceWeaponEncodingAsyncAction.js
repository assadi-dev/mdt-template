import { createAsyncThunk } from "@reduxjs/toolkit";
import { getServiceWeaponEncoding } from "./helpers";

export const retieaveServiceWeaponEncodingAsync = createAsyncThunk(
  "",
  async (payload) => {
    try {
      const { page, params } = payload;
      const res = await getServiceWeaponEncoding(page, params);
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
