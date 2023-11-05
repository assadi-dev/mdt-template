import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helpers";
import { retieaveServiceWeaponEncodingAsync } from "./ServiceWeaponEncodingAsyncAction";

export const ServiceWeaponEncodingSlice = createSlice({
  name: "ServiceWeaponEncoding",
  initialState,
  reducers: {
    serviceWeaponEncodingError: (state, action) => {},
    addServiceWeaponEncodingError: (state, action) => {
      const { payload } = action;

      let newCollection = [...state.collections, payload];
      state.collections = newCollection;
      state.count = state.count + 1;
    },
    updateServiceWeaponEncodingError: (state, action) => {},
    deleteServiceWeaponEncodingError: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(retieaveServiceWeaponEncodingAsync.pending, (state) => {
        state.state = "pending";
        state.error = "";
      })
      .addCase(retieaveServiceWeaponEncodingAsync.rejected, (state, action) => {
        state.state = "complete";
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
  addServiceWeaponEncodingError,
  updateServiceWeaponEncodingError,
  deleteServiceWeaponEncodingError,
} = ServiceWeaponEncodingSlice.actions;
export default ServiceWeaponEncodingSlice.reducer;
