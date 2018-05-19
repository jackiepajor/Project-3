const passport = require("passport");
const settings = require("../../config/settings");
require("../../config/passport")(passport);
const jwt = require("jsonwebtoken");
const Lesson = require("../../models/Lesson");
const db = require("../../models");

module.exports = {
  get: function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      db.Lesson.find({})
        .then(function(dbLesson) {
          res.json(dbLesson);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        })
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  },
  post: function(req, res) {
    var token = getToken(req.headers);
    // if (token) {
      let newLesson = new Lesson({
        title: req.body.title,
        images: req.body.images,
        videos: req.body.videos,
        body: req.body.body,
       

      });
      db.Lesson.create({ newLesson })
        .then(function(dbLesson) {
          res.json(dbLesson);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        })
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // }
  }
}