import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_INSTANCE } from "../../config/constantes";

export const sanctionApi = createApi({
  reducerPath: "SanctionApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_INSTANCE }),
  endpoints: (builder) => ({
    getSanctionByAgent: builder.query({
      query: (payload) => {
        const { idAgent, params } = payload;
        return {
          url: `sanctions/agent/${idAgent}`,
          params,
        };
      },
    }),
  }),
});

export const { useGetSanctionByAgentQuery } = sanctionApi;

export default sanctionApi.reducer;
