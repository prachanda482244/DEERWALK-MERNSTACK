import { Schema } from "mongoose";

const registerSchema = Schema({
    firstname: {
        type: String,
        required: [true, 'First name cannot be empty']
    },
    lastname: {
        type: String,
        required: [true, 'Last name cannot be empty']
    },
    email: {
        type: String,
        required: [true, "Email can't be empty"],
        unique: [true, "Already in use"]
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: [8, "Password Must be at least 8 characters"]
    },
    confirmPassword: {
        type: String,
        minlength: [8, "Password Must be at least 8 characters"]
    }
})
export default registerSchema