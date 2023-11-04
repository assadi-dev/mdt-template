import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { fetchTrombinoscopAgent } from "./helpers";

const retrieveAgentTrombinoscopAsync = createAsyncThunk(
  "Trombinoscop/get",
  async (payload) => {
    try {
      const { page, params } = payload;

      const res = await fetchTrombinoscopAgent(page, params);
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

export default retrieveAgentTrombinoscopAsync;
