const router = require("express").Router();
const passport = require('passport');
const settings = require('../../config/settings');
require('../../config/passport')(passport);
const jwt = require('jsonwebtoken');
const lessonController = require("../../controllers/api/lessonController");

router.route("/")
  .get(lessonController.getLessons)
  .post(lessonController.createLesson);

router.route("/:lesson_id")
  .get(lessonController.getLesson)
  .put(lessonController.updateLesson)
  .delete(lessonController.deleteLesson);

module.exports = router;