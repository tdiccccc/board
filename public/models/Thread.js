const mongoose = require("mongoose");

const  ThreadSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,/*絶対に書き込まなければならない*/
        maxlength: 20,
    },
    content: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Thread", ThreadSchema); /*server.jsでも使うため*/