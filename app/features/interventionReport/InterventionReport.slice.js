import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./helpers";
import { retrieveInterventionActionAsync } from "./interventionReportAsyncAction";

const InterventionReportSlice = createSlice({
  name: "InterventionReport",
  initialState: initialState,
  reducers: {
    addInterventionReport: (state, action) => {
      const { payload } = action;

      const collectionUpdated = [payload, ...state.collections];
      state.collections = collectionUpdated;
      state.count = state.count + 1;
    },
    editInterventionReport: (state, action) => {
      const { payload } = action;

      const collectionUpdated = [...state.collections].map(
        (interventionRepport) => {
          if (interventionRepport.id == payload.id) {
            return { ...interventionRepport, ...payload };
          }
          return interventionRepport;
        }
      );
      state.collections = collectionUpdated;
    },
    deleteInterventionReport: (state, action) => {
      const { payload } = action;

      const collectionUpdated = [...state.collections].filter(
        (interventionRepport) => interventionRepport.id != payload.id
      );
      state.collections = collectionUpdated;
      state.count = state.count - 1;
    },
    errorInterventionReport: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(retrieveInterventionActionAsync.pending, (state, action) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(retrieveInterventionActionAsync.rejected, (state, action) => {
        const { error } = action;
        state.status = "complete";
        state.error = error.message;
      })
      .addCase(retrieveInterventionActionAsync.fulfilled, (state, action) => {
        const { payload } = action;
        state.status = "complete";
        state.collections = payload?.data;
        state.count = payload?.count;
      });
  },
});

export const {
  addInterventionReport,
  editInterventionReport,
  deleteInterventionReport,
  errorInterventionReport,
} = InterventionReportSlice.actions;
export default InterventionReportSlice.reducer;
