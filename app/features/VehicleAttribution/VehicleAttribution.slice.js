import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helper";
import { retrieveVehicleAttributionAsync } from "./VehicleAsynAction";

const VehicleAttributionSlice = createSlice({
  name: "VehicleAttribution",
  initialState,
  reducers: {
    add_vehicleAttribution: (state, action) => {
      const { payload } = action;
      const addToCollection = [payload, ...state.collections];

      state.collections = addToCollection;
      state.count = state.count + 1;
    },
    edit_vehicleAttribution: (state, action) => {
      const { payload } = action;
      const updateCollection = [...state.collections].map((attribution) => {
        if (payload.id == attribution.id) {
          return { ...attribution, ...payload };
        }
        return attribution;
      });

      state.collections = updateCollection;
    },
    remove_vehicleAttribution: (state, action) => {
      const { payload } = action;
      if (!Array.isArray(payload))
        throw new Error("payload must be an array of ids");
      const removedToCollection = [...state.collections].filter(
        (attribution) => !payload.includes(attribution.id)
      );

      state.collections = removedToCollection;
      state.count = state.count - payload.length;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(retrieveVehicleAttributionAsync.rejected, (state, action) => {
        const { error } = action;
        state.error = error.message;
        state.status = "complete";
      })
      .addCase(retrieveVehicleAttributionAsync.pending, (state) => {
        state.status = "pending";
        state.error = "";
      })
      .addCase(retrieveVehicleAttributionAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = "complete";
        state.collections = payload.data;
        state.count = payload.count;
      });
  },
});

export const { add_vehicleAttribution } = VehicleAttributionSlice.actions;

export default VehicleAttributionSlice.reducer;
