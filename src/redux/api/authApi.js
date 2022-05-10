import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://onemealprep.com/api/v1/" }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (body) =>{
               return{
                url: 'auth/sign_in.json',
                method: 'post',
              //   headers: {
              //     'Content-Type': 'application/json',
              //     Authorization: `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`,
              // },
                body,
               };
            },
          }),

          registerUser: builder.mutation({
            query: (body) =>{
               return{
                url: 'auth/sign_up.json',
                method: 'post',
                body,
               };
            },
          }),
          
          changePassword: builder.mutation({
            query: (body) =>{
               return{
                url: 'auth/changePassword',
                method: 'put',
                body,
               };
            },
          }),
    }),
});

export const { 
    useLoginUserMutation,
    useRegisterUserMutation,
    useChangePasswordMutation,
    } = authApi;