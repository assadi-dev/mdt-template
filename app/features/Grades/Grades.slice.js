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
      state.count = state.count + 1;
    },
    editGrade: (state, action) => {
      const { payload } = action;

      const updatateGrades = [...state.collections].map((grade) => {
        if (grade.id == payload.id) {
          return { ...grade, ...payload };
        }
        return grade;
      });

      state.collections = updatateGrades;
    },
    removeGrade: (state, action) => {
      const { payload } = action;
      const gradeRemoved = [...state.collections].filter(
        (grade) => grade.id != payload.id
      );
      state.collections = gradeRemoved;
      state.count = state.count - 1;
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

export const { addGrade, editGrade, removeGrade } = GradesSlice.actions;
export default GradesSlice.reducer;
