import { Course } from "../model/course.model";
import { CourseProgress } from "../model/courseProgress.model";

export const getCourseProgress = async (req, res) => {
    try {
        const { courseId } = req.params;
        const userId = req.id;

        //step-1 fetch the user course progress
        let courseProgress = await CourseProgress.findOne({ userId, courseId }).populate("courseId");

        const courseDetails = await Course.findById(courseId);

        if (!courseDetails) {
            return res.status(404).json({ message: "Course not found" });
        }

        // step-2 if no progress found, return course details with an empty progress
        if (!courseProgress) {
            return res.status(200).json({
                course: courseDetails,
                progress: [],
                completed: false
            });
        }

        // step-3 if progress found, return course details with progress
        return res.status(200).json({
            courseDetails,
            progress: courseProgress.lectureProgress,
            completed: courseProgress.completed
        });

    } catch (error) {
        console.log(error);
    }
}

export const updateLectureprogress = async (req, res) => {
    try {
        const { courseId, lectureId } = req.params;
        const userId = req.id;

        // fetch or create course progress
        let courseProgress = await CourseProgress.findOne({ courseId, userId });

        if (!courseProgress) {
            //if no pogress exist, create a new record
            courseProgress = new CourseProgress({
                userId,
                courseId,
                completed: false,
                lectureProgress: [],
            });

        }

        //find the lecture progress in the course progress
        const lectureIndex = courseProgress.lectureProgress.findIndex((lecture) => lecture.lectureId === lectureId);
        
        if (lectureIndex !== -1) {
            // if lecture already exist, update its status
            courseProgress.lectureProgress[lectureIndex].viewed = true;
        } else {
            // Add new lecture progress
            courseProgress.lectureProgress.push({
                lectureId,
                viewed: true,
            });
        }
        //if all lectures is complete
        const lectureProgressLength = courseProgress.lectureProgress.filter((lectureProg) => lectureProg.viewed).length;
        const course = await Course.findById(courseId);
        if(course.lectures.length === lectureProgressLength) {
            courseProgress.completed = true;
        }

        await courseProgress.save();

        return res.status(200).json({
            message: "Lecture progress updated successfully",
            courseProgress,
        });

    } catch (error) {
        console.log(error);

    
    }
    export const markAsCompleted = async (req, res) => {
        try {
            const { courseId } = req.params;
            const userId = req.id;

            // Fetch or create course progress
            const courseProgress = await CourseProgress.findOne({ courseId, userId });

            if (!courseProgress) {
                // If no progress exists, create a new record
                courseProgress = new CourseProgress({
                    userId,
                    courseId,
                    completed: true,
                    lectureProgress: [],
                });
            } else {
                // If progress exists, mark it as completed
                courseProgress.completed = true;
            }

            await courseProgress.save();

            return res.status(200).json({
                message: "Course marked as completed successfully",
                courseProgress,
            });
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Failed to mark course as completed" });
            
        }
}