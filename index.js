// import http from 'http';
// const server =http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"text/plain"});
//     res.end("hello this is from backend");
// });
// server.listen(7007,()=>{
//     console.log(`sever running at port ${7007}`)
// });

// import http from 'http';
// const server = http.createServer((req, res) => {
//     console.log(req.method);
//     if(req.url==="/users"){
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({name:"John"}));
//     }
//     else{
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Hello, This is backend project!!!!\n');
//     }
// });
// server.listen(7007,()=>{
//     console.log(`Server is listening on port ${7007}`);
// })

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import taskRoutes from "./routers/taskRouters.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/studentDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));


app.use("/api/students", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

