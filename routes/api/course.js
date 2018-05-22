const router = require("express").Router();
const passport = require("passport");
const settings = require("../../config/settings");
require("../../config/passport")(passport);
const jwt = require("jsonwebtoken");
const courseController = require("../../controllers/api/courseController");

router.route("/", passport.authenticate('jwt', { session: false }))
  .get(courseController.getCourses)
  .post(courseController.createCourse);

router.route("/:id", passport.authenticate('jwt', { session: false }))
  .get(courseController.getCourse)
  .put(courseController.updateCourse)
  .delete(courseController.deleteCourse);

module.exports = router;