import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helpers";
import { retrieveIncidentActionAsync } from "./IncidentAsyncAction";

const IncidentReportSlice = createSlice({
  name: "IncidentReport",
  initialState: initialState,
  reducers: {
    addIncidentReport: (state, action) => {
      const { payload } = action;
      state.count = state.count + 1;
    },
    editIncidentReport: (state, action) => {},
    deleteIncidentReport: (state, action) => {},
    errorIncidentReport: (state, action) => {},
  },

  extraReducers: (builder) => {
    builder
      .addCase(retrieveIncidentActionAsync.pending, (state, action) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(retrieveIncidentActionAsync.rejected, (state, action) => {
        const { error } = action;
        state.status = "complete";
        state.error = error.message;
      })
      .addCase(retrieveIncidentActionAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = "complete";
        state.collections = payload?.data;
        state.count = payload?.count;
      });
  },
});

export const {
  addIncidentReport,
  editIncidentReport,
  deleteIncidentReport,
  errorIncidentReport,
} = IncidentReportSlice.actions;
export default IncidentReportSlice.reducer;
