import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { getAccessToken } from "@/utils/authInfo";
import { axiosBaseQuery } from "@/helpers/axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  endpoints: () => ({}),
  tagTypes: ["user"],
});
