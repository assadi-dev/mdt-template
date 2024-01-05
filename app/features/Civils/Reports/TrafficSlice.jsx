import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helper";
import { fetchTraffficAsyncCollection } from "./ReportAsyncAction";

const TrafficSlice = createSlice({
  name: "Traffic",
  initialState: initialState,
  reducers: {
    addTraffic: (state, action) => {
      const { payload } = action;
      const addedToCollections = [payload, ...state.collections];
      state.collections = addedToCollections;
      state.count = state.count + 1;
    },
    editTraffic: (state, action) => {
      const { payload } = action;
    },
    removeTraffic: (state, action) => {
      const { payload } = action;
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(fetchTraffficAsyncCollection.pending, (state) => {
        state.error = "";
        state.status = "pending";
      })
      .addCase(fetchTraffficAsyncCollection.rejected, (state, action) => {
        state.status = "complete";
        state.error = action.error.message;
      })
      .addCase(fetchTraffficAsyncCollection.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = "complete";
        state.collections = payload.data;
        state.count = payload.count;
      });
  },
});

export const { addTraffic, editTraffic, removeTraffic } = TrafficSlice.actions;
export default TrafficSlice.reducer;
