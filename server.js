const express = require("express")
const dataRoute = require("./src/routes/dataRoute.js")
const connectDB = require('./src/DB/connectDB.js'); // Import the DB connection function
require("dotenv").config();

require("./src/schedule.js");
// Connect to MongoDB
connectDB();

// express intance
const app = express();

// middle ware used
app.use(express.json());

// Home route
app.get("/",(req,res)=>{
    res.end("<h1>Hello MMI </h1>")
})
// middleware route
app.use("/api",dataRoute);
/*
    add schedule.js file code in main server.js file
*/


app.listen(8080,()=>{
    console.log("server is running on PORT No. 8080");
})