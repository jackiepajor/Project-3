const passport = require("passport");
const settings = require("../../config/settings");
require("../../config/passport")(passport);
const jwt = require("jsonwebtoken");
const Course = require("../../models/Course");
const db = require("../../models");

module.exports = {
  get: function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      db.Course.find({})
        .then(function(dbCourse) {
          res.json(dbCourse);
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
      var newCourse = new Course({
        title: req.body.title,
        topic: req.body.topic,
        synopsis: req.body.synopsis
      });
      db.Course.create(newCourse)
        .then(function(dbCourse) {
          res.json(dbCourse);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        })
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // }
  },
  getById: function(req, res) {
    var token = getToken(req.headers);
    // if (token) {
      db.Course.findOne({ _id: req.params._id })
        .then(function(dbCourse) {
          res.json(dbCourse);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        })
    // }
  },
  postById: function(req, res) {
    var token = getToken(req.headers);
    // if (token) {
      db.Course.findOneAndUpdate({ _id: req.params._id })
        .then(function(dbCourse) {
          res.json(dbCourse);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        })
    // }
  }
}