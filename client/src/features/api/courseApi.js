import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const COURSE_API = "http://localhost:8080/api/v1/course"

export const courseApi = createApi({
    reducerPath: 'courseApi',
    tagTypes:['Refetch-Creator-Course '],
    baseQuery: fetchBaseQuery({ baseUrl: COURSE_API, credentials: 'include' }),
    endpoints: (builder) => ({
        getAllCreatorCourses: builder.query({
            query: () => ({
                url: '',
                method: 'GET',
            }),
            providesTags:['Refetch-Creator-Course']
        }), 

        CreateCourse: builder.mutation({
            query: ({ courseTitle, category }) => ({
                url: '',
                method: 'POST',
                body: { courseTitle, category },
            }),
            invalidatesTags:['Refetch-Creator-Course']
        }),

        editCourse: builder.mutation({
            query: ({ formData, courseId }) => ({
                url: `/${courseId}`,
                method: 'PUT',
                body: formData,
            }),
            invalidatesTags:['Refetch-Creator-Course']
        }),

        getCourseById: builder.query({
            query: (courseId) => ({
                url: `/${courseId}`,
                method: 'GET',
            }),
        }),
        
        createLecture: builder.mutation({
            query:({lectureTitle,courseId})=>({
                url:`/${courseId}/lecture`,
                method:"POST",
                body:{lectureTitle}
            })

        }),
         getCourseLecture: builder.query({
            query:(courseId)=>({
                url:`/${courseId}/lecture`,
                method:"GET",
               
            })
        }),
        editLecture: builder.mutation({
                query:({lectureTitle, videoInfo, isPreviewFree, courseId, lectureId})=>({
                url:`/:${courseId}/lecture/:${lectureId}`,
                method:"POST",
                body:{lectureTitle,videoInfo,isPreviewFree}
                
            })
        })
    }),
});

export const 
{   useCreateCourseMutation, 
    useGetAllCreatorCoursesQuery, 
    useEditCourseMutation , 
    useGetCourseByIdQuery, 
    useCreateLectureMutation, 
    useGetCourseLectureQuery, 
    useEditLectureMutation 
    
} = courseApi;