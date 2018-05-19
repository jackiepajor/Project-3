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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/grasshopper", { promiseLibrary: require("bluebird") })
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
// app.use(routes);

app.use(logger("dev"));

const book = require("./routes/book");
const auth = require("./routes/auth");
const course = require("./routes/api/course/course");

app.use('/api/book', book);
app.use('/api/auth', auth);
app.use('/api/course', course);

app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.send(err.status || 500);
  // res.json("error");
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;