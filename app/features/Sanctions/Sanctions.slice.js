import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helpers";
import { retrieveSanctionsAsync } from "./SanctionAsynAction";

const SanctionSlice = createSlice({
  name: "Sanction",
  initialState,
  reducers: {
    add_sanction: (state, action) => {
      const { payload } = action;

      const addtoCollection = [payload, ...state.collections];
      state.collections = addtoCollection;
      state.count = state.count + 1;
    },
    edit_sanction: (state, action) => {
      const { payload } = action;
      const updateCollection = [...state.collections].map((sanction) => {
        if (sanction.id == payload.id) {
          return { ...sanction, ...payload };
        }
        return sanction;
      });

      state.collections = updateCollection;
    },
    delete_sanction: (state, action) => {
      const { payload } = action;
      if (!Array.isArray(payload))
        throw new Error("payload must be an array of ids");

      const removedToCollection = [...state.collections].filter((sanction) =>
        sanction.id.includes(payload)
      );

      state.collections = removedToCollection;
      state.count = state - payload.length;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(retrieveSanctionsAsync.pending, (state) => {
        state.status = "pending";
        state.error = "";
      })
      .addCase(retrieveSanctionsAsync.rejected, (state, action) => {
        const { error } = action;
        state.status = "complete";
        state.error = error.message;
      })
      .addCase(retrieveSanctionsAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = "complete";
        state.collections = payload.data;
        state.count = payload.count;
      });
  },
});

export const { add_sanction, edit_sanction, delete_sanction } =
  SanctionSlice.actions;

export default SanctionSlice.reducer;
