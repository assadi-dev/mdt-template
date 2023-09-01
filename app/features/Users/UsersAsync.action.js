import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetcheUserByPageApi } from "./helper";

export const getUserPaginationAsync = createAsyncThunk(
  "User/fetchByPagination",
  async (payload) => {
    try {
      const { page, params } = payload;
      const res = await fetcheUserByPageApi(page, params);
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
