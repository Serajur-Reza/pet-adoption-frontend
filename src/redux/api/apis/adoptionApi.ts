import { baseApi } from "../api";

const adoptionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllAdoptions: build.query({
      query: () => {
        return {
          url: `/adoption`,
          method: "GET",
        };
      },

      providesTags: ["adoption"],
    }),

    getMyAdoptions: build.query({
      query: () => {
        return {
          url: `/adoption/my-adoptions`,
          method: "GET",
        };
      },

      providesTags: ["adoption"],
    }),

    createAdoption: build.mutation({
      query: (body) => {
        return {
          url: `/adoption`,
          method: "POST",
          data: body,
        };
      },

      invalidatesTags: ["adoption"],
    }),

    updateAdoption: build.mutation({
      query: ({ id, body }) => {
        return {
          url: `/adoption/${id}`,
          method: "PUT",
          data: body,
        };
      },

      invalidatesTags: ["adoption"],
    }),
  }),
});

export const {
  useGetAllAdoptionsQuery,
  useGetMyAdoptionsQuery,
  useCreateAdoptionMutation,
  useUpdateAdoptionMutation,
} = adoptionApi;
