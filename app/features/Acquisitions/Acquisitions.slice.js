import { createSlice } from "@reduxjs/toolkit";
import { retrieveAcquisitionsAsync } from "./AcquisitionAsync";

const initialState = {
  collections: [],
  filters: [],
  search: "",
  status: "idle",
  count: 0,
  error: "",
};

export const AcquisitionSlice = createSlice({
  name: "Acquisitions",
  initialState,
  reducers: {
    addAcquisitions: (state, action) => {
      const { payload } = action;
      let acquisitionAdded = [payload, ...state.collections];

      state.collections = acquisitionAdded;
      state.count = state.count + 1;
    },
    updateAcquisitions: (state, action) => {
      const { payload } = action;

      let acquisitionUpdated = [...state.payload].map((acquisition) => {
        if (acquisition.id == payload.id) {
          return { ...acquisition, ...payload };
        }
        return acquisition;
      });
      state.collections = acquisitionUpdated;
    },
    deleteAcquisitions: (state, action) => {
      const { payload } = action;

      let acquisitionRemoved = [...state.payload].filter(
        (acquisition) => acquisition.id != payload.id
      );

      state.collections = acquisitionRemoved;
      state.count = state.count - 1;
    },
    errorAcquisitions: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(retrieveAcquisitionsAsync.pending, (state, action) => {
        state.status = "pending";
        state.error = "";
      })
      .addCase(retrieveAcquisitionsAsync.rejected, (state, action) => {
        state.status = "complete";
        state.error = action.error.message;
      })
      .addCase(retrieveAcquisitionsAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = "complete";
        state.collections = payload.data;
        state.count = payload.count;
      });
  },
});

export const {
  addAcquisitions,
  updateAcquisitions,
  deleteAcquisitions,
  errorAcquisitions,
} = AcquisitionSlice.actions;

export default AcquisitionSlice.reducer;
