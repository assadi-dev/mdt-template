import { createSlice } from "@reduxjs/toolkit";
import { retrieveAllCivilAsync } from "./CivilsAsyncAction";

const initialState = {
  collections: [],
  filters: [],
  search: "",
  status: "idle",
  count: 0,
  error: "",
};

const CivilSlice = createSlice({
  name: "Civils",
  initialState,
  reducers: {
    setError: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(retrieveAllCivilAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = "complete";
        state.collections = payload.data;
        state.count = payload.count;
      })
      .addCase(retrieveAllCivilAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(retrieveAllCivilAsync.rejected, (state, action) => {
        state.status = "complete";
        state.error = action.error.message;
      });
  },
});

export const { setError } = CivilSlice.actions;

export default CivilSlice.reducer;
