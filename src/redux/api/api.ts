import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState)?.auth?.accessToken;
      if (token) {
        headers.set("authorization", token);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["user"],
});
