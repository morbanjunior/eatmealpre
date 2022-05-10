import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://onemealprep.com/api/v1/" }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => `food-types`,
    }),
    getCategories: builder.query({
        query: (id) => `food-types/${id}`,
    }),
    addCategorie: builder.mutation({
        query: product =>({
            url: 'food-types',
            method: 'POST',
            body: product
        })
    }),
    updateCategorie: builder.mutation({
        query: ({id, ...rest}) =>({
            url: `food-types/${id}`,
            method: 'PUT',
            body: rest
        })
    }),
    deleteCategorie: builder.mutation({
        query: (id) =>({
            url: `food-types/${id}`,
            method: 'DELETE',
        })
    }),


  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetAllCategoriesQuery,
     useGetCategoriesQuery, 
     useAddCategorieMutation, 
     useUpdateCategorieMutation,
     useDeleteCategorieMutation, 
    } = categoriesApi;