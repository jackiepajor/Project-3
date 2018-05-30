const path = require("path");
const router = require("express").Router();
const courseRoutes = require("./course");
const unitRoutes = require("./unit");
const lessonRoutes = require("./lesson");
const categoryRoutes = require("./category");

// API Routes
router.use("/api/category", categoryRoutes);
router.use("/api/course", courseRoutes);
router.use("/api/course/:course_id/unit", unitRoutes);
router.use("/api/course/:course_id/unit/:unit_id/lesson", lessonRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;