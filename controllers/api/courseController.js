const passport = require("passport");
const settings = require("../../config/settings");
require("../../config/passport")(passport);
const jwt = require("jsonwebtoken");
const Course = require("../../models/Course");
const db = require("../../models");

module.exports = {
  getCourses: function(req, res) {
    var token = getToken(req.headers);
    // if (token) {
      db.Course.find({})
        .then(function(dbCourse) {
          res.json(dbCourse);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        });
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // };
  },
  createCourse: function(req, res) {
    var token = getToken(req.headers);
    // if (token) {;
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
        });;
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // }
  },
  getCourse: function(req, res) {
    var token = getToken(req.headers);
    // if (token) {
      db.Course.findOne({ _id: req.params.id })
        .then(function(dbCourse) {
          res.json(dbCourse);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        });
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // };
  },
  updateCourse: function(req, res) {
    var token = getToken(req.headers);
    // if (token) {
      db.Course.findOneAndUpdate({ _id: req.params.id }, { data }, { new: true })
        .then(function(dbCourse) {
          res.json(dbCourse);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        });
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // };
  },
  deleteCourse: function(req, res) {
    var token = getToken(req.headers);
    // if (token) {
      db.Course.findOneAndRemove({ _id: req.params.id })
        .then(function(dbCourse) {
          res.json(dbCourse);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        });
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // };
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