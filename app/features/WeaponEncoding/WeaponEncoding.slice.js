import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helpers";
import { retieaveWeaponEncodingAsync } from "./WeaponAsyncAction";

export const WeaponEncodingSlice = createSlice({
  name: "WeaponEncoding",
  initialState: initialState,
  reducers: {
    encodeCivilWeapon: (state, action) => {},
    updateCivilWeapon: (state, action) => {},
    deleteCivilWeapon: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(retieaveWeaponEncodingAsync.pending, (state) => {
        state.status = "pending";
        state.error = "";
      })
      .addCase(retieaveWeaponEncodingAsync.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "complete";
      })
      .addCase(retieaveWeaponEncodingAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.collections = payload.data;
        state.status = "complete";
        state.count = payload.count;
      });
  },
});

export const { encodeCivilWeapon } = WeaponEncodingSlice.actions;

export default WeaponEncodingSlice.reducer;
