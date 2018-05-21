const router = require("express").Router();
const passport = require('passport');
require('../../../config/passport')(passport);
const Course = require("../../../models/Course");
const db = require("../../../models");
const courseController = require("../../../controllers/api/courseController");

router.route("/")
  .get(courseController.getCourses)
  .post(courseController.createCourse);

router.route("/:id")
  .get(courseController.getCourse)
  .put(courseController.updateCourse)
  .delete(courseController.deleteCourse);

module.exports = router;