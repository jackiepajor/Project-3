const passport = require("passport");
const settings = require("../../config/settings");
require("../../config/passport")(passport);
const jwt = require("jsonwebtoken");
const Lesson = require("../../models/Lesson");
const db = require("../../models");

module.exports = {
  getLessons: function(req, res) {
    var token = getToken(req.headers);
    // if (token) {
      db.Lesson.find({})
        .then(function(dbLesson) {
          res.json(dbLesson);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        });
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // }
  },
  createLesson: function(req, res) {
    var token = getToken(req.headers);
    // if (token) {
      let newLesson = new Lesson({
        title: req.body.title,
        images: req.body.images,
        videos: req.body.videos,
        body: req.body.body,
      });
      db.Lesson.create(newLesson)
        .then(function(dbLesson) {
          res.json(dbLesson);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        });
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // }
  },
  getLesson: function(req, res) {
    var token = getToken(req.headers);
    // if (token) {
      db.Lesson.findOne({ _id: req.params.id })
        .then(function(dbLesson) {
          res.json(dbLesson);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        });
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // };
    },
    updateLesson: function(req, res) {
      var token = getToken(req.headers);
      // if (token) {
        db.Lesson.findOneAndUpdate({ _id: req.params.id }, { data }, { new: true })
          .then(function(dbLesson) {
            res.json(dbLesson);
          })
          .catch(function(err) {
            res.json("Error message: " + err);
          });
      // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // };
    },
    deleteLesson: function(req, res) {
      var token = getToken(req.headers);
      // if (token) {
        db.Lesson.findOneAndRemove({ _id: req.params.id })
          .then(function(dbLesson) {
            res.json(dbLesson);
          })
          .catch(function(err) {
            res.json("Error message: " + err);
          });
      // }
    }
  }

  getToken = function (headers) {
    if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  };