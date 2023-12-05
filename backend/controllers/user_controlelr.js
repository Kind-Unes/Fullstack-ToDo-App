// Import you services here
const UserService = require("../services/user_services");

// implelemnt your controlelrs

exports.register  =async(req,res,next)=>{
 try{   // get the req bodt
    const {email , password} = req.body;
    // validation test
    if (!email || !password) {
        throw new Error('Parameters are not correct');
    }
    // duplicates test
    const duplicate = await UserService.getUserByEmail(email);
    if (duplicate){
        throw new Error(`This email : ${email}, is already registred !`);
    }
    // Registering the user in the databse
    const response = await UserService.registerUser(email,password);
    // sending back a responde to the cliend
    res.status(200).json({status:true,success:"You have been successfully registered !"});}
    catch(err){
        throw err;
        next(err);
    }
}

exports.login = async (req, res, next) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error('Parameter are not correct');
        }

        let user = await UserService.getUserByEmail(email);
        
        if (!user) {
            throw new Error('User does not exist');
        }


        const isPasswordCorrect = await user.comparePassword(password);

        if (isPasswordCorrect === false) {
            throw new Error(`Username or Password does not match`);
        }

        // Creating Token

        let tokenData;
        tokenData = { _id: user._id, email: user.email };
    

        const token = await UserService.generateAccessToken(tokenData,"secret","1h")

        res.status(200).json({ status: true, success: "sendData", token: token });
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}