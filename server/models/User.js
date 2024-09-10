const mongoose = require("mongoose");

const userSchema = new mongoose.Schema ({
    firstName: {
        type:String,
        required: true,
        trim:true
    },
    lastName: {
        type:String,
        required: true,
        trim:true
    },
    email:{
        type:String,
        required: true,
        trim:true
    },
    password:{
        type:String,
        required: true,
    },
    accountType: {
        type:String,
        enum:["Client","Provider"],
        required: true
    },
    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "Profile"
    },
    image: {
        type:String,
    },
    token:{
        type:String,
    },
    resetPasswordExpires:{
        type:Date
    },
})

module.exports = mongoose.model("User", userSchema)