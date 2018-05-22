const router = require("express").Router();
const passport = require('passport');
const settings = require('../../config/settings');
require('../../config/passport')(passport);
const jwt = require('jsonwebtoken');
const unitController = require("../../controllers/api/unitController");

router.route("/", passport.authenticate('jwt', { session: false }))
  .get(unitController.getUnits)
  .post(unitController.createUnit);

router.route("/:id", passport.authenticate('jwt', { session: false }))
  .get(unitController.getUnit)
  .put(unitController.updateUnit)
  .delete(unitController.deleteUnit);

module.exports = router;