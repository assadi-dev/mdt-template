import { createSlice, current } from "@reduxjs/toolkit";
import { accueil } from "./helper";
import { RetrieveAccessByGradeAsync } from "./UserPermissionAsync.action";

const initialState = {
  access: [accueil],
  status: "idle",
  error: "",
};

export const UserPermissionSlice = createSlice({
  name: "Access",
  initialState,
  reducers: {
    pendingAccess: (state, action) => {
      state.error = "";
      state.status = "pending";
    },
    getAccess: (state, action) => {
      const { payload } = action;
      let showAccessPath = [...payload].filter((c) => c.isShow == true);
      state.access = [...state.access, ...showAccessPath];
      state.status = "fulfilled";
      state.error = "";
    },
    updateAccess: (state, action) => {
      const { payload } = action;
      let showAccessPath = [accueil, ...payload].filter(
        (c) => c.isShow == true
      );

      state.access = showAccessPath;
      state.status = "fulfilled";
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(RetrieveAccessByGradeAsync.fulfilled, (state, action) => {
        const { payload } = action;
        let showAccessPath = [...payload].filter((c) => c.isShow == true);
        state.access = [...state.access, ...showAccessPath];
        state.status = "fulfilled";
        state.error = "";
      })
      .addCase(RetrieveAccessByGradeAsync.pending, (state, action) => {
        const { payload } = action;
        state.status = "pending";
        state.error = "";
      })
      .addCase(RetrieveAccessByGradeAsync.rejected, (state, action) => {
        const { error } = action;
        state.error = error.message;
        state.status = "fulfilled";
      });
  },
});

export const { addAccess, updateAccess } = UserPermissionSlice.actions;

export default UserPermissionSlice.reducer;
