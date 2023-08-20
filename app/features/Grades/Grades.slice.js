import { createSlice } from "@reduxjs/toolkit";
import { retrievesGradesPaginationAsync } from "./GradesAsync.action";

const initialState = {
  collections: [],
  filters: [],
  search: "",
  status: "idle",
  count: 0,
  error: "",
};

const GradesSlice = createSlice({
  name: "Grades",
  initialState,
  reducers: {
    addGrade: (state, action) => {
      const { payload } = action;
      state.collections = [...state.collections, payload];
    },
    editGrade: (state, action) => {},
    removeGrade: (state, action) => {
      const { payload } = action;
      const gradeRemoved = [...state.collections].filter(
        (grade) => grade.id != payload.id
      );
      state.collections = gradeRemoved;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(retrievesGradesPaginationAsync.fulfilled, (state, actions) => {
        const { payload } = actions;
        state.collections = payload.data;
        state.count = payload.count;
        state.status = "complete";
      })
      .addCase(retrievesGradesPaginationAsync.pending, (state, actions) => {
        state.status = "pending";
        state.error = "";
      })
      .addCase(retrievesGradesPaginationAsync.rejected, (state, actions) => {
        const { error } = actions;
        state.status = "complete";
        state.error = error.message;
      });
  },
});

export const { addGrade, removeGrade } = GradesSlice.actions;
export default GradesSlice.reducer;
