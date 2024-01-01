import { configureStore } from "@reduxjs/toolkit";
import RootReducers from "./RootReducers";
import { endOfWatchApi } from "./EndOFWatch/EndOfWatchApi";
import { sanctionApi } from "./Sanctions/SanctionApi";
import { serviceWeaponApi } from "./ServiceWeaponEncoding/ServiceWeaponEncodingApi";
import { vehicleAttributionApi } from "./VehicleAttribution/VehicleAttributionApi";
import { codePenalApi } from "./CodePenals/CodePenalApi";

export default configureStore({
  reducer: RootReducers,
  trace: true,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    endOfWatchApi.middleware,
    sanctionApi.middleware,
    serviceWeaponApi.middleware,
    vehicleAttributionApi.middleware,
    codePenalApi.middleware,
  ],
});
