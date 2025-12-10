import express from 'express';
//install the npm i body-parser

const app = express();
app.use(express.json());

console.log("PUT route loaded!");

app.get('/', (req, res) => {//get means getting the data from backend to frontend
    // res.send("api success");
});

app.put('/edit-user', (req, res) => {
    let mydata = req.body;
    console.log("Received:", mydata);//updating
    res.send("data edited successfully");
});

app.post('/add-user', (req, res) => {
    let data = req.body;
    console.log("Received:", data);//posting the data in the data base
    res.send("Data added");
});

app.delete('/delete-user', (req, res) => {
    let data = req.body;   // data coming from the backend (ex: which user to delete)
    console.log(data);
    // Logic to delete user from database goes here
    res.send("User deleted successfully");
});

app.listen(7000, () => {
    console.log("Server running at port 7000");
});



