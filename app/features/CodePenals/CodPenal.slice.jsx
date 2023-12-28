import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helpers";

const CodePenalSlice = createSlice({
  name: "CodePenal",
  initialState,
});

export default CodePenalSlice.reducer;
