const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

const path = require("path");
const logger = require("morgan");
const favicon = require("serve-favicon");

mongoose.Promise = require("bluebird");

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://grasshopper:grasshopper1@ds245150.mlab.com:45150/heroku_1sf78q9l", { promiseLibrary: require("bluebird") })
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static(path.join(__dirname, "client", "build")))

app.use(logger("dev"));

// Add routes, both API and view
const auth = require("./routes/auth/auth");
const course = require("./routes/api/course");
const unit = require("./routes/api/unit");
const lesson = require("./routes/api/lesson");
const category = require("./routes/api/category");

app.use('/api/auth', auth);
app.use('/api/course', course);
app.use('/api/course/:course_id/unit', unit);
app.use('/api/course/:course_id/unit/:unit_id/lesson', lesson);
app.use('/api/category', category);

app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.sendStatus(err.status || 500);
});

app.get("*", (req, res) => {  
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;