const jwt = require("jsonwebtoken")
require("dotenv").config()
const User = require("../models/User")

//auth 
exports.auth = async(req,res,next) => {
    try{
        //extract token 
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "")

        //if token missing-> return response
        if(!token) {
            return res.status(401).json({
                success:false,
                message: "Token is missing"
            })
        }

        //if token available-> verify it
        try{
            const decode = await jwt.verify(token, process.env.JWT_SECRET)
            console.log(decode)
            req.user = decode
        }
        catch(error) {
            //verification issue
            return res.status(401).json({
                success:false,
                message: "Token is Invalid"
            })
        }

        next()
    }
    catch(error) {
        return res.status(401).json({
            success:false,
            message:"Something went wrong while validating a token"
        })
    }

}