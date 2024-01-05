import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helper";

const AvertissementSlice = createSlice({
  name: "Avertissement",
  initialState: initialState,
  reducers: {
    addAvertissement: (state, action) => {
      const { payload } = action;
      payload.createdAt = { date: new Date() };
      const addedToCollections = [payload, ...state.collections];

      state.collections = addedToCollections;
      state.count = state.count + 1;
    },
    editAvertissement: (state, action) => {
      const { payload } = action;
    },
    removeAvertissement: (state, action) => {
      const { payload } = action;
    },
  },
});

export const { addAvertissement, editAvertissement, removeAvertissement } =
  AvertissementSlice.actions;
export default AvertissementSlice.reducer;
