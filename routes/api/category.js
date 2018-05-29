const router = require("express").Router();
const passport = require("passport");
const settings = require("../../config/settings");
require("../../config/passport")(passport);
const jwt = require('jsonwebtoken');
const categoryController = require("../../controllers/api/categoryController");

router.route("/")
  .get(categoryController.getCategories)

module.exports = router;