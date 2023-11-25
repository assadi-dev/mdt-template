import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helpers";
import { fetchVehicleCivilCollectionAsync } from "./VehicleEncodingAsyncAction";

export const VehicleEncodingSlice = createSlice({
  name: "VehicleEncoding",
  initialState: initialState,
  reducers: {
    encodeCivilVehicle: (state, action) => {},
    updateCivilVehicle: (state, action) => {},
    deleteCivilVehicle: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicleCivilCollectionAsync.pending, (state) => {
        state.status = "pending";
        state.error = "";
      })
      .addCase(fetchVehicleCivilCollectionAsync.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "complete";
      })
      .addCase(fetchVehicleCivilCollectionAsync, (state, action) => {
        const { payload } = action;
        state.collections = payload.data;
        state.status = "complete";
        state.count = payload.count;
      });
  },
});

export const { encodeCivilVehicle } = VehicleEncodingSlice.actions;

export default VehicleEncodingSlice.reducer;
