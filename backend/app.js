// define the app
const express = require ("express");
const app = express();
const userRouter = require("./routes/user_router");


// first : global middlewares
app.use(express.json());
// second : routes 
app.use("/",userRouter);



//export the app
module.exports = app;
