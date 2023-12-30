import { configureStore } from "@reduxjs/toolkit";
import RootReducers from "./RootReducers";
import { endOfWatchApi } from "./EndOFWatch/EndOfWatchApi";

export default configureStore({
  reducer: RootReducers,
  trace: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(endOfWatchApi.middleware),
});
