const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const database = require("./config/database");
const dotenv = require("dotenv");
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

//import routes
const userRoutes = require("./routes/User")

//routes
app.use("/api/v1/auth", userRoutes)


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