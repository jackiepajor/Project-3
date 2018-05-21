const router = require("express").Router();
const unitController = require("../../controllers/api/unitController");

router.route("/")
  .get(unitController.getUnits)
  .post(unitController.createUnit);

router.route("/:id")
  .get(unitController.getUnit)
  .put(unitController.updateUnit)
  .delete(unitController.deleteUnit);

module.exports = router;