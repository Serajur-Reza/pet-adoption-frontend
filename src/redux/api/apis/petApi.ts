import { baseApi } from "../api";

const petApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allPets: build.query({
      query: () => {
        return {
          url: "/pets",
          method: "GET",
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
        console.log(body);
        // const formData = new FormData();
        // // Append files to FormData
        // for (let i = 0; i < body?.files?.length; i++) {
        //   console.log(body?.files[i]);
        //   formData.append("files", JSON.stringify(body?.files[i]));
        // }

        // // formData.append("files", body?.files);

        // // Append JSON data to FormData
        // formData.append("data", JSON.stringify(body?.data));

        // console.log(formData);
        return {
          url: `/pets/`,
          headers: { contentType: "multipart/form-data" },
          method: "POST",
          data: body,
          formData: true,
          Accept: "*/*",
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
