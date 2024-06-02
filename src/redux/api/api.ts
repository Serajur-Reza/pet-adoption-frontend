import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/helpers/axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://pet-adoption-backend-three.vercel.app/api",
  }),
  endpoints: () => ({}),
  tagTypes: ["user", "pets", "adoption"],
});
