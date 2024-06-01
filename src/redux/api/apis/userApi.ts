import { baseApi } from "../api";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allUsers: build.query({
      query: () => {
        return {
          url: "/user/all-users",
          method: "GET",
        };
      },

      providesTags: ["user"],
    }),

    myProfile: build.query({
      query: () => {
        return {
          url: "/user/my",
          method: "GET",
        };
      },

      providesTags: ["user"],
    }),

    editUser: build.mutation({
      query: (data) => {
        return {
          url: `/user/${data.id}`,
          method: "PATCH",
          data: data.body,
        };
      },

      invalidatesTags: ["user"],
    }),
  }),
});

export const { useAllUsersQuery, useMyProfileQuery, useEditUserMutation } =
  userApi;
