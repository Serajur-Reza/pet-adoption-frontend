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

    changePassword: build.mutation({
      query: (body) => {
        return {
          url: "/change-password",
          method: "POST",
          data: body,
        };
      },

      invalidatesTags: ["user"],
    }),

    editUser: build.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/${data.id}`,
          method: "PATCH",
          data: data.body,
        };
      },

      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useAllUsersQuery,
  useMyProfileQuery,
  useChangePasswordMutation,
  useEditUserMutation,
} = authApi;
