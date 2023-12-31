import { createSlice } from "@reduxjs/toolkit";
import { getUserPaginationAsync } from "./UsersAsync.action";

const initialState = {
  collections: [],
  status: "idle",
  error: "",
  count: 0,
  search: "",
  filters: [],
};

const UsersSlice = createSlice({
  name: "User/slice",
  initialState,
  reducers: {
    update_user: (state, action) => {
      const { payload } = action;

      const userUpdate = [...state.collections].map((u) => {
        if (u.id == payload.id) {
          return { ...u, ...payload };
        }
        return u;
      });

      state.collections = userUpdate;
    },
    remove_user: (state, action) => {
      const { payload } = action;
      if (!Array.isArray(payload))
        throw new Error("payload must be an array of ids");
      const removeToCollection = [...state.collections].filter(
        (u) => !payload.includes(u.id)
      );
      state.collections = removeToCollection;
      //state.count = state.count - removeToCollection.length;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserPaginationAsync.fulfilled, (state, { payload }) => {
        state.status = "complete";
        state.collections = payload.data;
        state.count = payload.count;
      })
      .addCase(getUserPaginationAsync.pending, (state) => {
        state.status = "pending";
        state.error = "";
      })
      .addCase(getUserPaginationAsync.rejected, (state, action) => {
        const { error } = action;
        state.status = "complete";
        state.error = error.message;
      });
  },
});

export const { update_user, remove_user } = UsersSlice.actions;

export default UsersSlice.reducer;
