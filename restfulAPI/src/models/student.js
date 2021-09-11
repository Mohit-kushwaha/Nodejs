const mongoose = require("mongoose")
const validator = require("validator")


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, 'name is too short']
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already exist"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not correct')
            }
        }
    },
    phone:{
        type: Number,
        min:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }

})

// create a new collection

const Student = new mongoose.model('Student',studentSchema)

module.exports = Student;