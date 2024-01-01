import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_INSTANCE } from "../../config/constantes";

export const codePenalApi = createApi({
  reducerPath: "CodePenalApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_INSTANCE }),
  endpoints: (builder) => ({
    getCodePenalByCategory: builder.query({
      query: (payload) => {
        const { params } = payload;
        return {
          url: `code_penals/category`,
          params,
        };
      },
    }),
  }),
});

export const { useGetCodePenalByCategoryQuery } = codePenalApi;

export default codePenalApi.reducer;
