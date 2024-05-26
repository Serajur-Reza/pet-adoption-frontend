import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { getAccessToken } from "@/utils/authInfo";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = getAccessToken();
      console.log(token);
      if (token) {
        headers.set("authorization", token);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["user"],
});