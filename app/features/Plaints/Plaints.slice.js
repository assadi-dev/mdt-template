import { retieavePlaintsAsync } from "./PaintsAsyncAction";
import { initialState } from "./helpers";
import { createSlice } from "@reduxjs/toolkit";

const PlaintSlice = createSlice({
  name: "Plaints",
  initialState,
  reducers: {
    addPlaint: (state, action) => {
      const { payload } = action;
      const plaintAdded = [payload, ...state.collections];
      // state.collections = plaintAdded;
      state.count = state.count + 1;
    },
    updatePlaint: (state, action) => {
      const { payload } = action;
      const plaintUpdated = [...state.collections].map((plaint) => {
        if (plaint.id == payload.id) {
          return { ...plaint, ...payload };
        }
        return plaint;
      });

      state.collections = plaintUpdated;
    },
    deletePlaint: (state, action) => {},
    errorPlaint: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(retieavePlaintsAsync.pending, (state, action) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(retieavePlaintsAsync.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(retieavePlaintsAsync.fulfilled, (state, action) => {
        const { payload } = action;

        state.status = "complete";
        state.collections = payload?.data;
        state.count = payload?.count;
      });
  },
});

export const { errorPlaint, addPlaint, updatePlaint } = PlaintSlice.actions;
export default PlaintSlice.reducer;
