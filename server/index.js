import express from 'express';
import dotenv from 'dotenv';
import userRoute from './route/user.route.js';

import connectDB from './database/db.js';
dotenv.config({});

connectDB();
const app = express();

const PORT = process.env.PORT || 3000;

//apis
app.use("/api/v1/user", userRoute);

// app.get("/home", (_, res) => {
//   res.status(200).json({
//     success: true,
//     message: "BrightPath API is running",
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})