import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helpers";
//import { retrievesGradesPaginationAsync } from "./GradesAsync.action";

const InterventionReportSlice = createSlice({
  name: "InterventionReport",
  initialState: initialState,
  reducers: {
    addInterventionReport: (state, action) => {
      const { payload } = action;
      state.count = state.count + 1;
    },
    editInterventionReport: (state, action) => {},
    deleteInterventionReport: (state, action) => {},
    errorInterventionReport: (state, action) => {},
  },
});

export const {
  addInterventionReport,
  editInterventionReport,
  deleteInterventionReport,
  errorInterventionReport,
} = InterventionReportSlice.actions;
export default InterventionReportSlice.reducer;
