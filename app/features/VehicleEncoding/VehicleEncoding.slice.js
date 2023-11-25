import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helpers";

export const VehicleEncodingSlice = createSlice({
  name: "VehicleEncoding",
  initialState: initialState,
  reducers: {
    encodeCivilVehicle: (state, action) => {},
    updateCivilVehicle: (state, action) => {},
    deleteCivilVehicle: (state, action) => {},
  },
});

export const { encodeCivilVehicle } = VehicleEncodingSlice.actions;

export default VehicleEncodingSlice.reducer;
