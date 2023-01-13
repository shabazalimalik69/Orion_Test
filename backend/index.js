const express = require("express");
const connectDb = require('./db');
const cors = require("cors")
const Router = require("./controller")
const app = express();

app.use(cors());
app.use(express.json())
app.use("/",Router);

app.get("/",(req,res)=>{
    res.send("Home")
});

app.listen(8080,async()=>{
    await connectDb();
    console.log("Server running on http://localhost:8080")
})