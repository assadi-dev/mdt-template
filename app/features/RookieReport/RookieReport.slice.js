import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helpers";
import { retieaveRookieReportAsync } from "./RookieReportAsynAction";

const RookieReportSlice = createSlice({
  name: "RookieReport/Collections",
  initialState,
  reducer: {
    addRookieReport: (state, action) => {
      const { payload } = action;
      state.collections = [payload, ...state.collections];
      state.count = state.count + 1;
    },
    setErrorRookieReport: (state, action) => {
      state.error = action.payload;
    },
    remoeRookieReport: (state, action) => {
      const { payload } = action;
      const collectionUpdated = [...state.collection].filter(
        (report) => !report.includes(payload)
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
        state.collection = action.payload.data;
        state.count = action.payload.count;
      });
  },
});

export const { addR } = RookieReportSlice.actions;

export default RookieReportSlice.reducer;
