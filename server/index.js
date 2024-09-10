const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);


//default route
app.get("/", (req,res) => {
    res.json({"users" : ["1","2","3"]})
})

app.get("/contact", (req,res) => {
    res.send("<h1>THis is contact page</h1>")
})


//activate server
app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`)
})