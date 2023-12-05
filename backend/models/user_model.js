//* Define your Database
const db = require("../configs/database");
//* import bcrypt
const bcrypt = require("bcrypt");
//* initialize your Schema
const Schema = require("mongoose").Schema;
//* Struture userSchema
const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "email cannot be empty"],
        lowercase: true,
        unique: true,
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "userName format is not correct",
        ],
    },
    password: {
        type: String,
        required: [true, "password is required"]
    }
}, { timestamps: true });
//* Define the Schema's methods
userSchema.pre("save", async function () {
    const user = this;

    if (!user.isModified("password")) {
        return;
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);

        user.password = hash;
    } catch (err) {
        throw err;
    }
});

userSchema.methods.comparePasswords = async function (password) {
    const user = this;
    try {
        const isMatch = await bcrypt.compare(password, user.password);
        return isMatch;
    } catch (err) {
        throw err;
    }
};
//* Create the Data Model
const userModel = db.model("users", userSchema);
//* Export the data model
module.exports = userModel;
