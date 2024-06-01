import { baseApi } from "../api";

const petApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allPets: build.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((element: { name: string; value: string }) => {
            params.append(element.name, element.value);
          });
        }

        return {
          url: "/pets",
          method: "GET",
          params: params,
        };
      },

      providesTags: ["pets"],
    }),

    singlePet: build.query({
      query: (id) => {
        return {
          url: `/pets/${id}`,
          method: "GET",
        };
      },

      providesTags: ["pets"],
    }),

    createPet: build.mutation({
      query: (body) => {
        return {
          url: `/pets`,
          method: "POST",
          data: body,
        };
      },

      invalidatesTags: ["pets"],
    }),

    updatePet: build.mutation({
      query: ({ id, body }) => {
        return {
          url: `/pets/${id}`,
          method: "PUT",
          data: body,
        };
      },

      invalidatesTags: ["pets"],
    }),

    deletePet: build.mutation({
      query: (id) => {
        return {
          url: `/pets/${id}`,
          method: "PATCH",
        };
      },

      invalidatesTags: ["pets"],
    }),
  }),
});

export const {
  useAllPetsQuery,
  useSinglePetQuery,
  useCreatePetMutation,
  useUpdatePetMutation,
  useDeletePetMutation,
} = petApi;
