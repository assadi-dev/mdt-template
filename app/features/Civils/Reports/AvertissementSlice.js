import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helper";

const AvertissementSlice = createSlice({
  name: "Avertissement",
  initialState: initialState,
  reducers: {
    addAvertissement: (state, action) => {},
    editAvertissement: (state, action) => {},
    removeAvertissement: (state, action) => {},
  },
});

export const { addAvertissement, editAvertissement, removeAvertissement } =
  AvertissementSlice.actions;
export default AvertissementSlice.reducer;
