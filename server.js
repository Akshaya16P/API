// import express from 'express';
// import cors from 'cors';
// import studentRouters from './routers/studentRouters.js';
// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use('/',studentRouters);

// app.listen(7000, () => {
//     console.log("Server running at port 7000");
// });


import express from 'express';
import cors from 'cors';
import mongoose, { mongo } from 'mongoose';
import studentRouter from './routers/studentsRouters.js';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://pandiakshaya123_db_user:Akshu123@cluster0.zlvs8uz.mongodb.net/").then(() => console.log("db connected"))
.catch((error) => console.log(error));

app.use('/', studentRouter);
app.get('/users', (req, res) => {
    console.log("hello this is");
    res.send("hello this is from backend");
})

app.listen(7007, () => {
    console.log("server running at port 7007")
});



// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const studentRouter = require("./routers/studentsRouters.js");

// const app = express();

// app.use(express.json());
// app.use(cors());

// mongoose
//   .connect("mongodb://localhost:27017/studentDB")
//   .then(() => console.log("db connected"))
//   .catch((err) => console.log(err));

// app.use("/", studentRouter);

// app.listen(7007, () => {
//   console.log("server running at port 7007");
// });
