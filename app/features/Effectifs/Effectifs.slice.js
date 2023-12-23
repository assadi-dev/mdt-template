import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helpers";
import { retrieveEffectifCollectionsAsync } from "./EffectifsAsyncAction";

const EffectifSlice = createSlice({
  name: "Agent/Effectifs",
  initialState,
  reducers: {
    delete_an_effectif: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(retrieveEffectifCollectionsAsync.pending, (state, action) => {
        state.status = "pending";
        state.error = "";
      })
      .addCase(retrieveEffectifCollectionsAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = "complete";
        state.count = payload.count;
        state.collections = payload.data;
      })
      .addCase(retrieveEffectifCollectionsAsync.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "complete";
      });
  },
});

export const { delete_an_effectif } = EffectifSlice.actions;

export default EffectifSlice.reducer;
