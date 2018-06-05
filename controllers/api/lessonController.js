const passport = require("passport");
const settings = require("../../config/settings");
require("../../config/passport")(passport);
const jwt = require("jsonwebtoken");
const Lesson = require("../../models/Lesson");
const db = require("../../models");

module.exports = {
  getLessons: function(req, res) {
    // if (req.headers.jwttoken) {
      db.Lesson.find({})
        .then(function(dbLesson) {
          res.json(dbLesson);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        })
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // }
  },
  createLesson: function(req, res) {
    // if (req.headers.jwttoken) {
      let newLesson = new db.Lesson({
        title: req.body.title,
        images: req.body.images,
        videos: req.body.videos,
        body: req.body.body,
      });
      db.Lesson.create(newLesson)
        .then(function(dbLesson) {
          db.Unit.findOneAndUpdate(
            { _id: req.params.unit_id }, 
            { $push: { lessons: dbLesson._id } }, 
            { new: true })
            .then(function() {
              res.json(dbLesson);
            })
            .catch(function(err) {});
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        })
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // }
  },
  getLesson: function(req, res) {
    // if (req.headers.jwttoken) {
      db.Lesson.findOne({ _id: req.params.lesson_id })
        .then(function(dbLesson) {
          res.json(dbLesson);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        })
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // };
  },
  updateLesson: function(req, res) {
    // if (req.headers.jwttoken) {
      db.Lesson.findOneAndUpdate({ _id: req.params.lesson_id }, req.body, { new: true })
        .then(function(dbLesson) {
          res.json(dbLesson);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        })
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // };
  },
  deleteLesson: function(req, res) {
    // if (req.headers.jwttoken) {
      db.Lesson.findOneAndRemove({ _id: req.params.lesson_id })
        .then(function(dbLesson) {
          db.Unit.findOneAndUpdate({ _id: req.params.unit_id },
            { $pull: { lessons: { _id: req.params.lesson_id } } }
          ).then(function(dbUnit) {
            res.json(dbLesson);
          })
          .catch(function(err) {
            res.json("Error message: " + err);
          });  
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        });
  // } else {
  //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
  // };
  }
}