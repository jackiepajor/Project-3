const router = require("express").Router();
const passport = require('passport');
require('../../../config/passport')(passport);
const Course = require("../../../models/Course");
const db = require("../../../models");
const courseController = require("../../../controllers/api/courseController");

router.route("/")
  .get(courseController.get)
  .post(courseController.post);

router.route("/:id")
  .get(courseController.getById)
  .post(courseController.postById);

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
