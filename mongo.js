import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
 
  app.get("/user", async (req, res) => {
  const users = await User.find();
  res.json(users);
});


  app.get("/", (req, res) => {
  res.send("Server is working!");
});

app.listen(3000, () => console.log("Server running"));
