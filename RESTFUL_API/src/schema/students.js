const mongoose = require('mongoose')
const validator = require('validator')
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        unique: [true, 'Email address already in use'],
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Email')
            }
        }
    },
    phone: {
        type: Number,
        minlength: 10,
        maxlength: 10,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
})
module.exports = studentSchema