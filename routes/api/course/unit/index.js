const path = require("path");
const router = require("express").Router();
const unitRoutes = require("./api/course/unit/lesson");

// API Routes
router.use("/unit", unitRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;