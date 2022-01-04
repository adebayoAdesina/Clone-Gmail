const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true,
        min: 3,
        max: 100,
        unique: true,
    },
    password:{
        type: String,
        require: true,
        min: 8,
    },
    profilePicture:{
        type: String,
        default: "",
    },
    backgroundPicture:{
        type: String,
        default: "",
    }
})