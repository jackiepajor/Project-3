const passport = require("passport");
const settings = require("../../config/settings");
require("../../config/passport")(passport);
const jwt = require("jsonwebtoken");
const Course = require("../../models/Course");
const db = require("../../models");

module.exports = {
  getCourses: function(req, res) {
    // if (req.headers.jwttoken) {
      db.Course.find({})
        .populate({ 
          path: 'units',
          populate: {
            path: 'lessons',
            model: 'Lesson'
          }
        })
        .then(function(dbCourse) {
          res.json(dbCourse);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        })
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // };
  },
  createCourse: function(req, res) {
    // if (req.headers.jwttoken) {
      let newCourse = new Course({
        title: req.body.title,
        topic: req.body.topic,
        synopsis: req.body.synopsis,
        category: req.body.category,
        requirements: req.body.requirements
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
  getCourse: function(req, res) {
    // if (req.headers.jwttoken) {
      db.Course.findOne({ _id: req.params.course_id })
        .populate({ 
          path: 'units',
          populate: {
            path: 'lessons',
            model: 'Lesson'
          } 
        })
        .then(function(dbCourse) {
          res.json(dbCourse);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        })
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // };
  },
  updateCourse: function(req, res) {
    // if (req.headers.jwttoken) {
      db.Course.findOneAndUpdate({ _id: req.params.course_id }, req.body, { new: true })
        .populate({ 
          path: 'units',
          populate: {
            path: 'lessons',
            model: 'Lesson'
          } 
        })
        .then(function(dbCourse) {
          res.json(dbCourse);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        })
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // };
  },
  deleteCourse: function(req, res) {
    // if (req.headers.jwttoken) {
      db.Course.findOneAndRemove({ _id: req.params.course_id })
        .then(function(dbCourse) {
          db.Users.find({},
            { 
              $pull: { enrolledcourses: { _id: req.params.course_id } },
              $pull: { managedcourses: { _id: req.params.course_id } }
            }
          ).then(function(dbUser) {
            res.json(dbCourse);
          })
          .catch(function(err) {
            res.json("Error message: " + err);
          });  
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        })
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // };
  }
}