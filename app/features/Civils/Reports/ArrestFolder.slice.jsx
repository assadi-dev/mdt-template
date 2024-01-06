import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helper";
import { fetchFolderArrestAsyncCollection } from "./ReportAsyncAction";

const ArrestFolderSlice = createSlice({
  name: "ArrestFolder",
  initialState: initialState,
  reducers: {
    addArrestFolder: (state, action) => {
      const { payload } = action;
      const addedToCollections = [payload, ...state.collections];
      state.collections = addedToCollections;
      state.count = state.count + 1;
    },
    editArrestFolder: (state, action) => {
      const { payload } = action;

      const updatedCollections = [...state.collections].map((item) => {
        if (item.id == payload.id) {
          return { ...item, ...payload };
        }
        return item;
      });

      state.collections = updatedCollections;
    },
    removeArrestFolder: (state, action) => {
      const { payload } = action;
      if (!Array.isArray(payload))
        throw new Error("payload must be an array of ids");
      const removedTo = [...state.collections].filter(
        (item) => !payload.includes(item.id)
      );

      state.collections = removedTo;
      state.count = state.count - payload.length;
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(fetchFolderArrestAsyncCollection.pending, (state) => {
        state.error = "";
        state.status = "pending";
      })
      .addCase(fetchFolderArrestAsyncCollection.rejected, (state, action) => {
        state.status = "complete";
        state.error = action.error.message;
      })
      .addCase(fetchFolderArrestAsyncCollection.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = "complete";
        state.collections = payload.data;
        state.count = payload.count;
      });
  },
});

export const { addArrestFolder, editArrestFolder, removeArrestFolder } =
  ArrestFolderSlice.actions;
export default ArrestFolderSlice.reducer;
