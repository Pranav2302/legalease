const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../templates/emailVerificationTemplate")

const otpSchema = mongoose.Schema({
    email: {
        type:String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 5*60
    }
});

//a function -> send mail
async function sendVerificationEmail(email, otp)  {
    try{
        const mailResponse = await mailSender(email, "Verification email from EdTech by Prashant", emailTemplate(otp))
        console.log("MailResponse:" , mailResponse)
    }
    catch(error) {
        console.log("error occured while sending mail:", error)
        throw error
    }
}

//pre middleware
otpSchema.pre("save",async function(next) {
    await sendVerificationEmail(this.email, this.otp)
    next()
})


module.exports = mongoose.model("OTP", otpSchema)