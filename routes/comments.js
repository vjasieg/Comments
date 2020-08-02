const express = require("express");
const router = express.Router();
const commentModel = require("../models/comment");
const app = require("../app");
const comment = require("../models/comment");

router.post('/post', (req, res, next) => {
    const comment = new commentModel({
        nickname: req.body.nick,
        contents: req.body.contents
    });
    comment.save(function() {
        res.json({"status": "sent"});
    });
});

router.get('/get', (req, res, next) => {
    commentModel.find({}, function(err, comments) {
        if(!err) {
            var commentsMap = {};
            comments.forEach(function(commentModel) {
                commentsMap[commentModel._id] = commentModel;
            });
            res.send(commentsMap);
            res.status(200);
        }else {
            res.status(500);
        }
    });
});

router.delete('/delete', (req, res, next) => {
    commentModel.remove({}, function() {
        res.json({
            "status": "deleted"
        });
        res.status(200);
    });
});

module.exports = router;