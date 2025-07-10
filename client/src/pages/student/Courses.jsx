import React from 'react'

const Courses = () => {
    const isLoading = true;
    return (
        <div className="bg-gray-50">
            <div className='max-w-7xl mx-auto p-6'>
                <h2 className='font-bold text-3xl text-center mb-10'>Our Courses</h2>
                {
                    isLoading ? "" : ""
                }
            </div>
        </div>
    )
}

export default Courses

const CourseSkeleton = () => {
    return (
        <div className=' bg-white shadow-md hover: shadow-lg transition-shadow rounded-lg overflow-hidden'>
        <Skeleton className="w-full h-36" />
        <div className="px-5 py-4 space-y-3">
<Skeleton className="h-6 w-3/4" />
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<Skeleton className="h-6 w-6 rounded-full" />
    )
