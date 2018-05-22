const passport = require("passport");
const settings = require("../../config/settings");
require("../../config/passport")(passport);
const jwt = require("jsonwebtoken");
const Unit = require("../../models/Unit");
const db = require("../../models");

module.exports = {
  getUnits: function(req, res) {
    // if (req.headers.jwttoken) {
      db.Unit.find({})
        .then(function(dbUnit) {
          res.json(dbUnit);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        })
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // }
  },
  createUnit: function(req, res) {
    // if (req.headers.jwttoken) {
      let newUnit = new Unit({
        name: req.body.name,
        author: req.body.author,
        category: req.body.category,
        lessons: req.body.lessons
      });
      db.Unit.create(newUnit)
        .then(function(dbUnit) {
          res.json(dbUnit);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        })
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // }
  },
  getUnit: function(req, res) {
    // if (req.headers.jwttoken) {
      db.Unit.findOne({ _id: req.params.id })
        .then(function(dbUnit) {
          res.json(dbUnit);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        })
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // }
  },
  updateUnit: function(req, res) {
    // if (req.headers.jwttoken) {
      db.Unit.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(function(dbUnit) {
          res.json(dbUnit);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        })
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // }
  },
  deleteUnit: function(req, res) {
    // if (req.headers.jwttoken) {
      db.Unit.findOneAndRemove({ _id: req.params.id })
        .then(function(dbUnit) {
          res.json(dbUnit);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        })
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // };
  }
}