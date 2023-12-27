import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helper";

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
});

export const { add_vehicleAttribution } = VehicleAttributionSlice.actions;

export default VehicleAttributionSlice.reducer;
