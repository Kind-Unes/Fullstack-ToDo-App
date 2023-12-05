const userRouter = require("express").Router();
const userController = require("../controllers/user_controlelr");
// import your controllers here:

// create the routes
userRouter.post("/register",userController.register);
userRouter.post("/login",userController.login);

// export your router


module.exports = userRouter;