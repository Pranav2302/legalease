const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const database = require("./config/database");

dotenv.config();
const PORT = process.env.PORT || 4000;

// db connection
database.connect();

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
    res.send("<h1>This is Homepage</h1>")
})

app.get("/contact", (req,res) => {
    res.send("<h1>This is contact page</h1>")
})


//activate server
app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`)
})