// ローカルサーバーの立ち上げ
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// const Thread = require("./models/Thread"); node.jsのdownloadの場所が違う可能性があり、エラー


const PORT = 3000;


app.use(express.static("public"));

mongoose
  .connect(
    "mongodb+srv://tdiccccc:ad19979820@cluster0.u5qw5.mongodb.net/threads?retryWrites=true&w=majority"
  )
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));


//getメソッド
app.get("/api/v1/threads", async (req, res) => {
  try {
    const allThreads = await Thread.find({});
    res.status(200).json(allThreads);
  } catch (err) {
    console.log(err);
  }
});

//postメソッド
app.get("/api/v1/threads", async (req, res) => {
  try {
    const createThread = await Thread.create(req.body);
    res.status(200).json(createThread);
  } catch (err) {
    console.log(err);
  }
});


app.listen(PORT, console.log("server running"));