import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helpers";
import { retrieveCodePenalCollectionsAsync } from "./CodePenalAsynAction";

const CodePenalSlice = createSlice({
  name: "CodePenal",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(retrieveCodePenalCollectionsAsync.pending, (state) => {
        state.status = "pending";
        state.error = "";
      })
      .addCase(retrieveCodePenalCollectionsAsync.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "complete";
      })
      .addCase(retrieveCodePenalCollectionsAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.collections = payload.data;
        state.count = payload.count;
        state.status = "complete";
      });
  },
});

export default CodePenalSlice.reducer;
