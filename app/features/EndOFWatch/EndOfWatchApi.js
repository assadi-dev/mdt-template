import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_INSTANCE } from "../../config/constantes";

export const endOfWatchApi = createApi({
  reducerPath: "EndOfWatchApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_INSTANCE }),
  endpoints: (builder) => ({
    getEndOfWatchCollections: builder.query({
      query: (payload) => {
        const { page, params } = payload;
        return {
          url: `end_of_watches/pagination/${page}`,
          params,
        };
      },
    }),
  }),
});

export const { useGetEndOfWatchCollectionsQuery } = endOfWatchApi;

export default endOfWatchApi.reducer;
