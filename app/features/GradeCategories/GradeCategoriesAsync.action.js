import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGradeCategorieByPage } from "./helper";

export const RetrieveGradeCategoriesPaginationAsync = createAsyncThunk(
  "GradeCategories/GetByPagination",
  async (payload) => {
    try {
      const { page, params } = payload;

      const res = await fetchGradeCategorieByPage(page, params);
      return await res.data;
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
