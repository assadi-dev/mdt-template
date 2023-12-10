import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helpers";
import { retrieveGunFightReportAsync } from "./GunFightAsynAction";

const GunFightReportSlice = createSlice({
  name: "GunFightReport",
  initialState: initialState,
  reducers: {
    addGunFightReport: (state, action) => {
      const { payload } = action;
      const collectionsUpdated = [payload, ...state.collections];
      state.collections = collectionsUpdated;
      state.count = state.count + 1;
    },
    editGunFightReport: (state, action) => {
      const { payload } = action;
      const collectionsUpdated = [...state.collections].map((report) => {
        if (report.id == payload.id) {
          return { ...report, ...payload };
        }
        return report;
      });
      state.collections = collectionsUpdated;
    },
    deleteGunFightReport: (state, action) => {
      const { payload } = action;
      const collectionsUpdated = [...state.collections].filter(
        (report) => !payload.includes(report.id)
      );
      state.collections = collectionsUpdated;
      state.count = state.count - 1;
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

export const { addGunFightReport, editGunFightReport, deleteGunFightReport } =
  GunFightReportSlice.actions;
export default GunFightReportSlice.reducer;
