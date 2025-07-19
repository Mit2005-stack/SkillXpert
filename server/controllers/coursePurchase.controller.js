import Stripe from "stripe"
import {Course} from "../model/course.model.js"
import {CoursePurchase} from "../model/coursePurchase.model.js"


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async(req,res)=>{
    try {
        const userId = req.id;
        const {courseId} = req.body;

        const course = await Course.findById(courseId);
        if(!course) return res.status(404).json({message:"Course not found!"})

        //Create a new course purchase record
        const newPurchase = new  CoursePurchase({
            courseId,
            userId,
            amount: course.coursePrice,
            status:"pending"
        });

        //Create a strip checkout session
        

    } catch (error) {
        console.log(error)
    }
}
