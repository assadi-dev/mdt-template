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
      state.count = state.count + 1;
    },
    removeGradeCaregory: (state, action) => {
      const { payload } = action;
      const removedgradeCategory = [...state.collections].filter(
        (gradeCategory) => gradeCategory.id != payload.id
      );
      state.collections = removedgradeCategory;
    },
    editGradeCategory: (state, action) => {
      const { payload } = action;

      const updatateGradeCaategory = [...state.collections].map(
        (gradeCategory) => {
          if (gradeCategory.id == payload.id) {
            return { ...gradeCategory, ...payload };
          }
          return gradeCategory;
        }
      );

      state.collections = updatateGradeCaategory;
      state.count = state.count - 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        RetrieveGradeCategoriesPaginationAsync.fulfilled,
        (state, action) => {
          const { payload } = action;

          state.collections = payload.data;
          state.count = payload.count;
          state.status = "complete";
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
