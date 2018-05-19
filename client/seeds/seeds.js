
var mongoose = require("mongoose");

// Requiring the `Category` model for accessing the `examples` collection
var Category = require(".models/Category.js");

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/schemaCategory");

// Create an object containing dummy data to save to the database
var data = {
  array: ["Technology", "Animals", "Science", "Art", "Humanities"],

};

// Save a new Category using the data object
Category.create(data)
  .then(function(dbCategory) {
    // If saved successfully, print the new Category document to the console
    console.log(dbCategory);
  })
  .catch(function(err) {
    // If an error occurs, log the error message
    console.log(err.message);
  });