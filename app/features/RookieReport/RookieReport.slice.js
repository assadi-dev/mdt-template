import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helpers";
import { retieaveRookieReportAsync } from "./RookieReportAsynAction";

const RookieReportSlice = createSlice({
  name: "RookieReport",
  initialState,
  reducers: {
    addRookieReport: (state, action) => {
      const { payload } = action;
      state.collections = [payload, ...state.collections];
      state.count = state.count + 1;
    },
    setErrorRookieReport: (state, action) => {
      state.error = action.payload;
    },
    removeRookieReport: (state, action) => {
      const { payload } = action;
      const collectionUpdated = [...state.collections].filter(
        (report) => !payload.includes(report.id)
      );
      state.collections = collectionUpdated;
      state.count = state.count - 1;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(retieaveRookieReportAsync.pending, (state, action) => {
        state.error = "";
        state.status = "pending";
      })
      .addCase(retieaveRookieReportAsync.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "complete";
      })
      .addCase(retieaveRookieReportAsync.fulfilled, (state, action) => {
        state.status = "complete";
        state.collections = action.payload.data;
        state.count = action.payload.count;
      });
  },
});

export const { addRookieReport, removeRookieReport } =
  RookieReportSlice.actions;

export default RookieReportSlice.reducer;
