import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        reuired: [true, "Please provide an username"],
        unique: [true, "This username is already taken"]
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true
    },
    password: {
        type: String,
        required:[true, "Please provide a password"]
    }, 
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyPassword: String,
    verifyTokenExpiry: Date
});

