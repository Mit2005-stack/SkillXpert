import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userLoggedIn } from '@/features/authslice';

const USER_API = "http://localhost:8080/api/v1/user/";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: USER_API,
        credentials: "include",
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (inputData) => ({
                url: 'register',
                method: 'POST',
                body: inputData,
            }),
        }),
        loginUser: builder.mutation({
            query: (inputData) => ({
                url: 'login',
                method: 'POST',
                body: inputData,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    // If your API returns user in result.data, use result.data.user
                    dispatch(userLoggedIn({ user: result.data?.user || result.user }));
                } catch (error) {
                    console.error('Login failed:', error);
                }
            }
        }),
    }),
});

export const {
    useRegisterUserMutation,
    useLoginUserMutation
} = authApi;

