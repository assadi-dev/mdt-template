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
    udpateUser: (state, action) => {
      const { payload } = action;

      let userUpdate = [...state.collections].map((u) => {
        if (u.id == payload.id) {
          return { ...u, ...payload };
        }
        return u;
      });

      state.collections = userUpdate;
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

export const { udpateUser } = UsersSlice.actions;

export default UsersSlice.reducer;
