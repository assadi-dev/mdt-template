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
      const updatedCollections = [...state.collections].map((item) => {
        if (item.id == payload.id) {
          return { ...item, ...payload };
        }
        return item;
      });

      state.collections = updatedCollections;
    },
    removeTraffic: (state, action) => {
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
