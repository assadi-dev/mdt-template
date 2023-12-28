import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helpers";
import { retrieveCodePenalCollectionsAsync } from "./CodePenalAsynAction";

const CodePenalSlice = createSlice({
  name: "CodePenal",
  initialState,
  reducers: {
    add_codePenal: (state, action) => {
      const { payload } = action;
      const addToCollections = [payload, ...state.collections];
      state.collections = addToCollections;
      state.count = state.count + 1;
    },
    edit_codePenal: (state, action) => {
      const { payload } = action;
      const updateCollections = [...state.collections].map((codePenal) => {
        if (codePenal.id == payload.id) {
          return { ...codePenal, ...payload };
        }
        return codePenal;
      });
      state.collections = updateCollections;
    },
    remove_codePenal: (state, action) => {
      const { payload } = action;

      if (!Array.isArray(payload))
        throw new Error("payload must be an array of ids");

      const removedToCollection = [...state.collections].filter(
        (codePenal) => !payload.includes(codePenal.id)
      );

      state.collections = removedToCollection;
      state.count = state - payload.length;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(retrieveCodePenalCollectionsAsync.pending, (state) => {
        state.status = "pending";
        state.error = "";
      })
      .addCase(retrieveCodePenalCollectionsAsync.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "complete";
      })
      .addCase(retrieveCodePenalCollectionsAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.collections = payload.data;
        state.count = payload.count;
        state.status = "complete";
      });
  },
});

export const { add_codePenal, edit_codePenal, remove_codePenal } =
  CodePenalSlice.actions;
export default CodePenalSlice.reducer;
