import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helpers";
//import { retrievesGradesPaginationAsync } from "./GradesAsync.action";

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
});

export const {
  addIncidentReport,
  editIncidentReport,
  deleteIncidentReport,
  errorIncidentReport,
} = IncidentReportSlice.actions;
export default IncidentReportSlice.reducer;
