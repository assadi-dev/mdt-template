import { createSlice } from "@reduxjs/toolkit";
import retrieveAgentTrombinoscopAsync from "./TrombinoscopAsync.action";

const initialState = {
  collections: [],
  filters: [],
  search: "",
  status: "idle",
  count: 0,
  error: "",
};

const TrombinoscopSlice = createSlice({
  name: "trombinoscop",
  initialState,
  reducers: {
    setError: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(retrieveAgentTrombinoscopAsync.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "error";
      })
      .addCase(retrieveAgentTrombinoscopAsync.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(retrieveAgentTrombinoscopAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.collections = payload;
        state.status = "complete";
      });
  },
});

export default TrombinoscopSlice.reducer;
