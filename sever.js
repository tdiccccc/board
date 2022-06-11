// ローカルサーバーの立ち上げ
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;

app.use(express.static("public"));

mongoose.connect(
  "mongodb+srv://tdiccccc:ad19979820@cluster0.u5qw5.mongodb.net/threads?retryWrites=true&w=majority"
).then(() => console.log("db connected"));

app.listen(PORT, console.log("server running"));