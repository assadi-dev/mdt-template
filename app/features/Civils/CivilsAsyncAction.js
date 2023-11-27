import { fetchAllcivils, fetchSingleCivil } from "./helpers";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const retrieveAllCivilAsync = createAsyncThunk(
  "Civils/AllByPaginate",
  async (payload) => {
    try {
      const { page, params } = payload;
      const result = await fetchAllcivils(page, params);
      return result.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        error.response.data
          ? (message = error.response.data.violations[0].message)
          : error.response.data.detail;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

export const retrieveOneCivilAsync = createAsyncThunk(
  "Civils/single",
  async (payload) => {
    try {
      const { idCivil } = payload;
      const result = await fetchSingleCivil(idCivil);
      return result.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        error.response.data
          ? (message = error.response.data.violations[0].message)
          : error.response.data.detail;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);
