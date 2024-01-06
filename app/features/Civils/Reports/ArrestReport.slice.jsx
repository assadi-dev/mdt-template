import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helper";
import {
  fetchArrestReportAsyncCollection,
  fetchTraffficAsyncCollection,
} from "./ReportAsyncAction";

const ArrestReportSlice = createSlice({
  name: "ArrestReport",
  initialState: initialState,
  reducers: {
    addArrestReport: (state, action) => {
      const { payload } = action;
      const addedToCollections = [payload, ...state.collections];
      state.collections = addedToCollections;
      state.count = state.count + 1;
    },
    editArrestReport: (state, action) => {
      const { payload } = action;
      const updatedCollections = [...state.collections].map((item) => {
        if (item.id == payload.id) {
          return { ...item, ...payload };
        }
        return item;
      });

      state.collections = updatedCollections;
    },
    removeArrestReport: (state, action) => {
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
      .addCase(fetchArrestReportAsyncCollection.pending, (state) => {
        state.error = "";
        state.status = "pending";
      })
      .addCase(fetchArrestReportAsyncCollection.rejected, (state, action) => {
        state.status = "complete";
        state.error = action.error.message;
      })
      .addCase(fetchArrestReportAsyncCollection.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = "complete";
        state.collections = payload.data;
        state.count = payload.count;
      });
  },
});

export const { addArrestReport, editArrestReport, removeArrestReport } =
  ArrestReportSlice.actions;
export default ArrestReportSlice.reducer;
