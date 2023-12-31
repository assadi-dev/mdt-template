import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_INSTANCE } from "../../config/constantes";

export const vehicleAttributionApi = createApi({
  reducerPath: "vehicleAttributionApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_INSTANCE }),
  endpoints: (builder) => ({
    getvehicleAttribution: builder.query({
      query: (payload) => {
        const { idAgent, params } = payload;
        return {
          url: `vehicle_attributions/agent/${idAgent}`,
          params,
        };
      },
    }),
  }),
});

export const { useGetvehicleAttributionQuery } = vehicleAttributionApi;

export default vehicleAttributionApi.reducer;
