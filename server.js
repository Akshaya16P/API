import express from 'express';
import studentRouters from './routers/studentRouters.js';
const app = express();
app.use(express.json());
app.use('/',studentRouters);

app.listen(7000, () => {
    console.log("Server running at port 7000");
});

