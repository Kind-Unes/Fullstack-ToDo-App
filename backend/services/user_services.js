const userModel = require("../models/user_model");
// jwt + other dependecies

//* Defining the UserService Class
class UserService {
    
    static async getUserByEmail(email){
        try {
            const foundUser = await userModel.findOne({email});
            return foundUser;
        } catch (error) {
            throw error;
        }
    }

    static async registerUser(email,password)  {
        try {
            const user = new userModel({email,password});
            return user.save();
        } catch (error) {
            throw error;
        }
    } 


    static async generateAccessToken(tokenData,JWTSecret_Key,JWT_EXPIRE){
        return jwt.sign(tokenData, JWTSecret_Key, { expiresIn: JWT_EXPIRE });
    }

}



//* Exporting the user service class:D



module.exports = UserService;


/* 
constructor(userModel) {
        this.userModel = userModel;
}


*/