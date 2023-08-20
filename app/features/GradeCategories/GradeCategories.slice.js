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
  reducers: {
    addGradeCategory: (state, action) => {
      const { payload } = action;
      state.collections = [...state.collections, payload];
    },
    removeGradeCaregory: (state, action) => {
      const { payload } = action;
      const removedgradeCategory = [...state.collections].filter(
        (gradeCategory) => gradeCategory.id != payload.id
      );
      state.collections = removedgradeCategory;
    },
    editGradeCategory: (state, action) => {},
  },
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

export const { addGradeCategory, removeGradeCaregory, editGradeCategory } =
  GradeCategoriesSlice.actions;
export default GradeCategoriesSlice.reducer;
