import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helpers";
import { retrieveGunFightReportAsync } from "./GunFightAsynAction";

const GunFightReportSlice = createSlice({
  name: "GunFightReport",
  initialState: initialState,
  reducers: {
    addGunFightReport: (state, action) => {
      const { payload } = action;
    },
    editGunFightReportt: (state, action) => {
      const { payload } = action;
    },
    deleteGunFightReport: (state, action) => {
      const { payload } = action;
    },
    errorGunFightReport: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(retrieveGunFightReportAsync.pending, (state, action) => {
        state.status = "pending";
        state.error = "";
      })
      .addCase(retrieveGunFightReportAsync.rejected, (state, action) => {
        state.status = "complete";
        state.error = action.error.message;
      })
      .addCase(retrieveGunFightReportAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = "complete";
        state.collections = payload.data;
        state.count = payload.count;
      });
  },
});

export const {
  addIncidentReport,
  editIncidentReport,
  deleteIncidentReport,
  errorIncidentReport,
} = GunFightReportSlice.actions;
export default GunFightReportSlice.reducer;
