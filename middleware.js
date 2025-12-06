import express from 'express';
//install the npm i body-parser

const app = express();
app.use(express.json());

console.log("PUT route loaded!");

app.get('/', (req, res) => {
    res.send("api success");
});

app.get('/akshaya',(req,res)=>{
    res.send("Akshaya");
})
app.put('/edit-user', (req, res) => {
    let mydata = req.body;
    console.log("Received:", mydata);
    res.send("data edited successfully");
});

app.post('/add-user', (req, res) => {
    let data = req.body;
    console.log("Received:", data);
    res.send("Data added");
});

app.delete('/delete-user', (req, res) => {
    let data = req.body;   // data coming from frontend (ex: which user to delete)
    console.log(data);
    // Logic to delete user from database goes here
    res.send("User deleted successfully");
});

app.listen(7000, () => {
    console.log("Server running at port 7000");
});
