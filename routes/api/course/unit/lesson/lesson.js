

const router = require("express").Router();
const passport = require('passport');
require('../../../../../config/passport')(passport);
const Course = require("../../../../../models/Course");
const db = require("../../../../../models");
const courseController = require("../../../../../controllers/api/courseController");

router.route("/")
  .get(lessonController.get)
  .post(lessonController.post);

router.route("/:id")
  .get(lessonController.getById)

  .post(lessonController.postById);


// router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
//   var token = getToken(req.headers);
//   if (token) {

//   } else {
//     return res.status(403).send({success: false, msg: 'Unauthorized.'});
//   }
// });

// router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
//   var token = getToken(req.headers);
//   if (token) {

//   } else {
//     return res.status(403).send({success: false, msg: 'Unauthorized.'});
//   }
// });

// router.get('/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
//   var token = getToken(req.headers);
//   if (token) {

//   } else {
//     return res.status(403).send({success: false, msg: 'Unauthorized.'});
//   }
// });

// router.post('/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
//   var token = getToken(req.headers);
//   if (token) {

//   } else {
//     return res.status(403).send({success: false, msg: 'Unauthorized.'});
//   }
// });

module.exports = router;