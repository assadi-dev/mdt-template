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
    getGroupedCodePenalByCategory: builder.query({
      query: (payload) => {
        const { params } = payload;
        return {
          url: `code_penals/grouped/category`,
          params,
        };
      },
    }),
  }),
});

export const {
  useGetCodePenalByCategoryQuery,
  useGetGroupedCodePenalByCategoryQuery,
} = codePenalApi;

export default codePenalApi.reducer;
