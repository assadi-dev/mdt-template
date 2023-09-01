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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserPaginationAsync.fulfilled, (state, { payload }) => {
        console.log(payload);
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

export default UsersSlice.reducer;
