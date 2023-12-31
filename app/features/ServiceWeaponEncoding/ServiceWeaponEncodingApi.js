import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_INSTANCE } from "../../config/constantes";

export const serviceWeaponApi = createApi({
  reducerPath: "serviceWeaponApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_INSTANCE }),
  endpoints: (builder) => ({
    getServiceWeaponEncoding: builder.query({
      query: (payload) => {
        const { idAgent, params } = payload;
        return {
          url: `service_weapon_encodings/agent/${idAgent}`,
          params,
        };
      },
    }),
  }),
});

export const { useGetServiceWeaponEncodingQuery } = serviceWeaponApi;

export default serviceWeaponApi.reducer;
