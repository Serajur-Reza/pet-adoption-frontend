import { baseApi } from "../api";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
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
  }),
});

export const { useChangePasswordMutation } = authApi;
