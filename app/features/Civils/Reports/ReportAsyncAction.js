import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetcArrestFolderCollections,
  fetcArrestReportCollections,
  fetcTrafficsCollections,
  fetchAvertissementCollections,
} from "./helper";

/**
 * Call Api des avertissement
 */
export const fetchAvertissementAsyncCollection = createAsyncThunk(
  "Civils/Case/Avertissements",
  async (payload) => {
    try {
      const { idCivil, params } = payload;
      const result = await fetchAvertissementCollections(idCivil, params);

      return result.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        error.response.data
          ? (message = error.response.data.message)
          : error.response.data.detail;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

/**
 * Call Api des Traffic
 */
export const fetchTraffficAsyncCollection = createAsyncThunk(
  "Civils/Case/Traffics",
  async (payload) => {
    try {
      const { idCivil, params } = payload;
      const result = await fetcTrafficsCollections(idCivil, params);
      return result.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        error.response.data
          ? (message = error.response.data.message)
          : error.response.data.detail;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

/**
 * Call Api des Rapport d'arrestations
 */
export const fetchArrestReportAsyncCollection = createAsyncThunk(
  "Civils/Case/ArrestReport",
  async (payload) => {
    try {
      const { idCivil, params } = payload;
      const result = await fetcArrestReportCollections(idCivil, params);
      return result.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        error.response.data
          ? (message = error.response.data.message)
          : error.response.data.detail;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);

/**
 * Call Api des Dossiers d'arrestations
 */
export const fetchFolderArrestAsyncCollection = createAsyncThunk(
  "Civils/Case/ArrestFolder",
  async (payload) => {
    try {
      const { idCivil, params } = payload;
      const result = await fetcArrestFolderCollections(idCivil, params);
      return result.data;
    } catch (error) {
      let message = "";
      if (error.response) {
        error.response.data
          ? (message = error.response.data.message)
          : error.response.data.detail;
      } else {
        message = error.message;
      }
      throw new Error(message);
    }
  }
);
