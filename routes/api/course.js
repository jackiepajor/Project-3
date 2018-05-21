const router = require("express").Router();
const passport = require("passport");
const settings = require("../../config/settings");
require("../../config/passport")(passport);
const jwt = require("jsonwebtoken");
const courseController = require("../../controllers/api/courseController");

router.route("/")
  .get(courseController.getCourses)
  .post(courseController.createCourse);

router.route("/:id")
  .get(courseController.getCourse)
  .put(courseController.updateCourse)
  .delete(courseController.deleteCourse);

module.exports = router;