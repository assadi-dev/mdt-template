import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helpers";
import { retieaveServiceWeaponEncodingAsync } from "./ServiceWeaponEncodingAsyncAction";

export const ServiceWeaponEncodingSlice = createSlice({
  name: "ServiceWeaponEncoding",
  initialState,
  reducers: {
    serviceWeaponEncodingError: (state, action) => {},
    addServiceWeaponEncoding: (state, action) => {
      const { payload } = action;

      let newCollection = [...state.collections, payload];
      state.collections = newCollection;
      state.count = state.count + 1;
    },
    updateServiceWeaponEncoding: (state, action) => {},
    deleteServiceWeaponEncoding: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(retieaveServiceWeaponEncodingAsync.pending, (state) => {
        state.state = "pending";
        state.error = "";
      })
      .addCase(retieaveServiceWeaponEncodingAsync.rejected, (state, action) => {
        state.state = "rejected";
        state.error = action.error.message;
      })
      .addCase(
        retieaveServiceWeaponEncodingAsync.fulfilled,
        (state, action) => {
          const { payload } = action;
          state.status = "complete";
          state.collections = payload.data;
          state.count = payload.count;
        }
      );
  },
});

export const {
  addServiceWeaponEncoding,
  updateServiceWeaponEncoding,
  deleteServiceWeaponEncoding,
} = ServiceWeaponEncodingSlice.actions;
export default ServiceWeaponEncodingSlice.reducer;
