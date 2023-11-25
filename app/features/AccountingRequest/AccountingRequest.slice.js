import { createSlice } from "@reduxjs/toolkit";
import { retrieveAccountingRequest } from "./AccountingRequestAsyn.action";

const initialState = {
  collections: [],
  filters: [],
  search: "",
  status: "idle",
  count: 0,
  error: "",
};

const AccountingRequestByPage = createSlice({
  name: "AccountingRequestByPage",
  initialState,
  reducers: {
    addAccountingRequestByPage: (state, action) => {
      const { payload } = action;
      let updateState = [payload, ...state.collections];

      state.collections = updateState;
      state.count = state.count + 1;
    },
    editAccountingRequestByPage: (state, action) => {
      const { payload } = action;
      const updateState = [...state.collections].map((demande) => {
        if (demande.id == payload.id) {
          return { ...demande, ...payload };
        }
        return demande;
      });

      state.collections = updateState;
    },
    deleteAccountingRequestByPage: (state, action) => {},
    errorAccountingRequestByPage: (state, action) => {
      state.error = action.payload;
      state.status = "complete";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(retrieveAccountingRequest.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(retrieveAccountingRequest.pending, (state, action) => {
        state.status = "pending";
        state.error = "";
      })
      .addCase(retrieveAccountingRequest.fulfilled, (state, action) => {
        state.status = "complete";
        state.collections = action.payload.data;
        state.count = action.payload.count;
      });
  },
});

export const {
  addAccountingRequestByPage,
  editAccountingRequestByPage,
  deleteAccountingRequestByPage,
  errorAccountingRequestByPage,
} = AccountingRequestByPage.actions;

export default AccountingRequestByPage.reducer;
