const app = require("./app");
const PORT = process.env.PORT || 5000;



app.listen(PORT, () => {
    console.log("The server is running on PORT =", PORT);
});






















/* index.js -> app.js -> router -> controller -> service
1- make .env file

Index.js
1- listen to the port
2- app.get("/",(req,res)=>{res.send("Hello World")})

app.js
1- define the app variable
2- define the global middlewares + routes
3- app.use(them)
4- export app

router.js
1- define the router variable : const router = require("express").Router()
2- define the used controllers : const {getusers} = require("../controllers/userController")
3- define the routes : router.get("/",getusers)
4- export the router : module.exports = router

config.js

1- define the mongoose variable : const mongoose = require("mongoose")
2- create the connection : mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
3- export the connection : module.exports = mongoose

model.js
1- define the mongoose variable : const mongoose = require("mongoose")
2- define the schema variable
3- create the schema : const userSchema = new mongoose.Schema({})
4- create the model : const User = mongoose.model("User",userSchema)
    define the methods : u create // pre . . . 
5- export the model : module.exports = User


controller.js
1- define the services you need
2- export.functionName = async (req,res,next){. . . }
3- implement the logic you memorize


*/
