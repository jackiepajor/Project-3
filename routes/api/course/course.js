const router = require("express").Router();
const passport = require('passport');
require('../../../config/passport')(passport);
const Course = require("../../../models/Course");
const db = require("../../../models");
const courseController = require("../../../controllers/api/courseController");

router.route("/")
  .get(courseController.get)
  .post(courseController.post);

// router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
//   var token = getToken(req.headers);
//   if (token) {

//   } else {
//     return res.status(403).send({success: false, msg: 'Unauthorized.'});
//   }
// });

// router.post('/', function(req, res) {
//   console.log('api/course post route called')
//   var token = getToken(req.headers);
//   // if (token) {
//     let newCourse = new Course({
//       title: req.body.title,
//       description: req.body.description,
//       category: req.body.category
//     });
//     db.Course.create({ newCourse })
//       .then(function(dbCourse) {
//         res.json(dbCourse);
//       })
//       .catch(function(err) {
//         res.json("Error message: " + err);
//       })
//   // } else {
//   //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
//   // }
// });

router.get('/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {

  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

router.post('/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {

  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

module.exports = router;
