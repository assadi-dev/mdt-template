import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helpers";
import { retrieveSanctionsAsync } from "./SanctionAsynAction";

const SanctionSlice = createSlice({
  name: "Sanction",
  initialState,
  reducers: {
    add_sanction: (state, action) => {},
    edit_sanction: (state, action) => {},
    delete_sanction: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(retrieveSanctionsAsync.pending, (state) => {
        state.status = "pending";
        state.error = "";
      })
      .addCase(retrieveSanctionsAsync.rejected, (state, action) => {
        const { error } = action;
        state.status = "complete";
        state.error = error.message;
      })
      .addCase(retrieveSanctionsAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = "complete";
        state.collections = payload.data;
        state.count = payload.count;
      });
  },
});

export const { add_sanction, edit_sanction, delete_sanction } =
  SanctionSlice.actions;

export default SanctionSlice.reducer;
