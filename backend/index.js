// const express = require('express')
// const dotenv = require('dotenv');
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import  bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';

const app = express();
// const port = 3000

app.use(cors());
app.use(express.json());                    // body se data json nhe ja rhe h wosko parse krna padega json format m

dotenv.config();

const PORT = process.env.PORT || 3000;
const URI = process.env.MongoDB_URI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("connect to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes

app.use("/book", bookRoute);
app.use("/user", userRoute);



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})