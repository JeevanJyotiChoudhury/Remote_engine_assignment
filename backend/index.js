const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./db");

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Server running at port 8080");
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    console.log("Error in connecting to the database");
  }
});
