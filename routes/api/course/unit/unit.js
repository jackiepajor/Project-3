

const router = require("express").Router();
const passport = require('passport');
require('../../../../config/passport')(passport);
const Course = require("../../../../models/Course");
const db = require("../../../../models");
const courseController = require("../../../../controllers/api/courseController");

router.route("/")
  .get(unitController.get)
  .post(unitController.post);

router.route("/:id")
  .get(unitController.getById)

  .post(unitController.postById);

module.exports = router;
