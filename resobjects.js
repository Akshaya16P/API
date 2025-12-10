// Import Express (ESM)
import express from "express";

// Object creation
const app = express();
app.use(express.json());

// http://localhost:3000
// http://127.0.0.1:3000

// Root Route
app.get("/", (req, res) => {
    res.send("Server Running");
});

// Home Route
app.get("/home", (req, res) => {
    res.send({
        message: "This is home",
        rollNo: "23P31A1218"
    });
});

// ---------------------------
// Passing data from client
// ---------------------------

// 1️⃣ Path Params →  /user/:roll
app.get("/user/:roll", (req, res) => {
    const roll = req.params.roll;
    res.send(`Roll Number: ${roll}`);
});

// 2️⃣ Query Params →  /users/search?roll=101&name=Ram
app.get("/users/search", (req, res) => {
    const { roll, name } = req.query;
    res.send({
        roll: roll,
        name: name
    });
});

// 3️⃣ Body Data → POST
app.post("/user/add", (req, res) => {
    const { roll, name, branch, college, section, gender, age, mobile, state, status } = req.body;

    res.json({
        RollNumber: roll,
        Name: name,
        Branch: branch,
        College: college,
        Section: section,
        Gender: gender,
        Age: age,
        Mobile: mobile,
        State: state,
        Status: status
    });
});

// Start the server
app.listen(3000, () => {
    console.log("Server running at port number 3000");
}); //explain this code cleanly