import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helpers";

export const WeaponEncodingSlice = createSlice({
  name: "WeaponEncoding",
  initialState: initialState,
  reducers: {
    encodeCivilWeapon: (state, action) => {},
    updateCivilWeapon: (state, action) => {},
    deleteCivilWeapon: (state, action) => {},
  },
});

export const { encodeCivilWeapon } = WeaponEncodingSlice.actions;

export default WeaponEncodingSlice.reducer;
