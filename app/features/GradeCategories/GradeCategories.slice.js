import { createSlice } from "@reduxjs/toolkit";
import { RetrieveGradeCategoriesPaginationAsync } from "./GradeCategoriesAsync.action";

const initialState = {
  collections: [],
  filters: [],
  search: "",
  status: "idle",
  count: 0,
  error: "",
};

const GradeCategoriesSlice = createSlice({
  name: "GradeCategories",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        RetrieveGradeCategoriesPaginationAsync.fulfilled,
        (state, action) => {
          const { payload } = action;

          state.collections = payload.data;
          state.count = payload.count;
          state.state = "complete";
        }
      )
      .addCase(
        RetrieveGradeCategoriesPaginationAsync.pending,
        (state, action) => {
          state.status = "pending";
          state.error = "";
        }
      )
      .addCase(
        RetrieveGradeCategoriesPaginationAsync.rejected,
        (state, action) => {
          const { error } = action;
          state.status = "complete";
          state.error = error.message;
        }
      );
  },
});

export default GradeCategoriesSlice.reducer;
