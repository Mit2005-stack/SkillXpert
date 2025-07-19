import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { createCourse, createLecture, editCourse, editLecture, getAllCreatorCourses, getCourseById, getCourseLecture, getLectureById, removeLecture } from '../controllers/course.controller.js';
import upload from "../utils/multer.js";
const router = express.Router();

router.route('/').post(isAuthenticated, createCourse);
router.route('/').get(isAuthenticated, getAllCreatorCourses);
router.route('/:courseId').put(isAuthenticated, upload.single("courseThumbnail"), editCourse);
router.route('/:courseId').get(isAuthenticated, getCourseById);
router.route('/:courseId/lecture').post(isAuthenticated, createLecture);
router.route('/:courseId/lecture').get(isAuthenticated, getCourseLecture);
router.route('/:courseId/lecture/:lectureId').post(isAuthenticated, editLecture);
router.route('/:courseId/lecture/:lectureId').delete(isAuthenticated, removeLecture);
router.route('/lecture/:lectureId').get(isAuthenticated, getLectureById);
    


export default router;