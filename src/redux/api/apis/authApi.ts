import { baseApi } from "../api";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allUsers: build.query({
      query: () => {
        return {
          url: "/all-users",
          method: "GET",
        };
      },

      providesTags: ["user"],
    }),

    myProfile: build.query({
      query: () => {
        return {
          url: "/my",
          method: "GET",
        };
      },

      providesTags: ["user"],
    }),
  }),
});

export const { useAllUsersQuery, useMyProfileQuery } = authApi;
