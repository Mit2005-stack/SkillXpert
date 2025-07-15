import React from 'react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const COURSE_API = "http://localhost:8080/api/v1/course"

export const courseApi = createApi({
    reducerPath: 'courseApi',
    baseQuery: fetchBaseQuery({ baseUrl: COURSE_API, credentials: 'include' }),
    endpoints: (builder) => ({
        getAllCreatorCourses: builder.query({
            query: () => ({
                url: '',
                method: 'GET',
                
            }),
        CreateCourse: builder.mutation({
            query: () => ({
                url: '',
                method: 'POST',
                body: { courseTitle, category },
            }),
        }),
    }),
});

export const { useCreateCourseMutation } = courseApi;
export const { useGetAllCreatorCoursesQuery } = courseApi;