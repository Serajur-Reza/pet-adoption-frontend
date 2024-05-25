import { baseApi } from "../api";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: "/login",
          method: "POST",
          data: { body: data },
        };
      },

      invalidatesTags: ["user"],
    }),
  }),
});

export const { useUserLoginMutation } = authApi;
