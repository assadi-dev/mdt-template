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
    encodeCivil: (state, action) => {
      const { payload } = action;
      const civilAdded = [payload, ...state.collections];
      state.collections = civilAdded;
      state.count = state.count + 1;
    },
    editCivil: (state, action) => {
      const { payload } = action;
      const id = payload.id;

      const updateCivil = [...state.collections].map((civil) => {
        if (civil.id == id) {
          return { ...civil, ...payload };
        }
        return civil;
      });

      state.collections = updateCivil;
    },
    deleteCivil: (state, action) => {},
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

export const { setError, encodeCivil, editCivil } = CivilSlice.actions;

export default CivilSlice.reducer;
