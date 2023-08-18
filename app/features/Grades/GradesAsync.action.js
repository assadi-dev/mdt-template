import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGradesByPage } from "./helper";

export const retrievesGradesPaginationAsync = createAsyncThunk(
  "Grades/GetByPagination",
  async (payload) => {
    try {
      const { page, params } = payload;
      const res = await fetchGradesByPage(page, params);
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
