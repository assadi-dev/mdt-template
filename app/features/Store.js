import { configureStore } from "@reduxjs/toolkit";
import RootReducers from "./RootReducers";
import { endOfWatchApi } from "./EndOFWatch/EndOfWatchApi";
import { sanctionApi } from "./Sanctions/SanctionApi";

export default configureStore({
  reducer: RootReducers,
  trace: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(endOfWatchApi.middleware)
      .concat(sanctionApi.middleware),
});
