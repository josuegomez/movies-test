const express = require("express");
const mongoose = require("mongoose");

process.env.NODE_ENV && require("dotenv").config({
  path: `${__dirname}/.env.${process.env.NODE_ENV}`
});

const app = express();

const port = process.env.PORT || 5000;
const dbPath = process.env.DB_CONNECTION;

const movieRouter = require("./routes/movies");

app.use(express.json());
app.use("/movie", movieRouter);

mongoose
  .connect(dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo Atlas Connected "));

app.listen(port, () => {
  console.log("app running successfully");
  console.log(`Open Browser in: http://localhost:${port}/movie`);
});
