import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAccountingRequestByPage,
  fetchAccountingRequestByPageForAgent,
} from "./helpers";

export const retrieveAccountingRequest = createAsyncThunk(
  "AccountingRequest/fetchAll",
  async (payload) => {
    try {
      const { idAgent, page, params } = payload;

      if (idAgent) {
        const res = await fetchAccountingRequestByPageForAgent(
          idAgent,
          page,
          params
        );
        return res.data;
      } else {
        const res = await fetchAccountingRequestByPage(page, params);
        return res.data;
      }
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
