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
    addAcquisitions: (state, action) => {},
    updateAcquisitions: (state, action) => {},
    deleteAcquisitions: (state, action) => {},
    errorAcquisitions: (state, action) => {},
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
        state.error = "";
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
