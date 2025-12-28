const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// mongodb connection
mongoose
  .connect("mongodb://127.0.0.1:27017/lms")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/courses", require("./routes/courseRoutes"));

// test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

// server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
