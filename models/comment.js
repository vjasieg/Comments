const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nickname: {type: String, required: true},
    contents: {type: String, required: true}
});

module.exports = mongoose.model("Post", commentSchema);