import { Course } from "../model/course.model.js";

export const createCourse = async (req, res) => {
    try {
        const newCourse = new Course(req.body);
       if(!newCourse.courseTitle || !newCourse.category) {
            return res.status(400).json({ message: "Course title or category is required." });
        }
        const course = await Course.create({
            courseTitle: newCourse.courseTitle,
            category: newCourse.category,
            creator: req.id,
        });
        return res.status(201).json({
           
            message: "Course created successfully",
            course,
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({ message: "Failed to create course" });
    }
};
export const getAllCreatorCourses = async (req,res) =>{
    try {
        const userId = req.id;
        const courses = await Course.find({ creator: userId });
       if(!courses){
            return res.status(404).json({ message: "No courses found for this creator." });
        }
        return res.status(200).json({
            message: "Courses fetched successfully",
            courses,
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Failed to fetch courses"
        })
    }
}
