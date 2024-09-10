const express = require("express");
const router = express.Router();

//import controllers
const {login, signup, sendotp} = require("../controller/Auth") 




//import middleware



//route for client login
router.post("/login", login)

//route for client signup
router.post("/signup", signup)

//route for sending otp to the mail
router.post("/sendotp", sendotp)

// //route for changing password
// router.post("/changePassword",auth, changePassword)



module.exports = router