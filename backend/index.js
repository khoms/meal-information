const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const errorHandler = require("./middleware/error");

// const app = express();

const connectDB = require("./config/db");
connectDB();

const app = express(cors({ origin: "*" }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use(express.json());
dotenv.config({ path: "./config/config.env" });

//eerohandler middleware should be placed after the route
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
const ipAdd = process.env.IP_ADD;

app.listen(PORT, console.log("Server running in " + ipAdd + ":" + PORT));
