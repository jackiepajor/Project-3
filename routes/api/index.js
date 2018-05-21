const path = require("path");
const router = require("express").Router();
const courseRoutes = require("./course");
const unitRoutes = require("./unit");
const lessonRoutes = require("./lesson");

// API Routes
router.use("/api/course", courseRoutes);
router.use("/api/unit", unitRoutes);
router.use("/api/lesson", lessonRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;