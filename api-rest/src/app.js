const express = require("express");
const { APIport } = require("dotenv").config().parsed;
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());


const cars = require("../routes/cars");
app.use("/cars", cars);




app.listen(APIport, () => console.log(`Listening port ${APIport}`));