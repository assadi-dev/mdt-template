import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAccess } from "./helper";

export const RetrieveAccessByGradeAsync = createAsyncThunk(
  "Access/getAccess",
  async (payload) => {
    try {
      const res = await fetchAccess(payload);
      return res.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        message = error.response.data.detail;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);
