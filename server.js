// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
// import studentRouter from "./routers/studentsRouters.js";

// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose
//   .connect(
//     "mongodb+srv://pandiakshaya123_db_user:Akshu123@cluster0.zlvs8uz.mongodb.net/test"
//   )
//   .then(() => console.log("DB connected"))
//   .catch((error) => console.log(error));

// app.use("/", studentRouter);

// app.get("/users", (req, res) => {
//   res.send("hello this is from backend");
// });

// app.listen(7007, () => {
//   console.log("server running at port 7007");
// });


import express from 'express';
import studentsRoutes from './routers/studentsRouters.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', studentsRoutes);

app.get('/', (req, res) => {
    res.send("api success");
});

app.listen(7000, () => {
    console.log("Server running at port 7000");
});
