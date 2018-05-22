
var mongoose = require("mongoose");

// // Requiring the `Category` model for accessing the `examples` collection
var Category = require("../../models/Category.js");

// // Connect to the Mongo DB
// mongoose.connect("mongodb://localhost/grasshopper");

// // Create an object containing dummy data to save to the database
// var data = {
//   array: ["Technology", "Animals", "Science", "Art", "Humanities"],

// };

// // Save a new Category using the data object
// Category.save(data)
//   .then(function(dbCategory) {
//     // If saved successfully, print the new Category document to the console
//     console.log(dbCategory);
//   })
//   .catch(function(err) {
//     // If an error occurs, log the error message
//     console.log(err.message);
//   });


var seeder = require('mongoose-seed');
 
// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/grasshopper', function() {
 
  // Load Mongoose models
  seeder.loadModels([
      '../../models/Category.js',
      '../../models/Course.js'
      
  ]);
 
  // Clear specified collections
  seeder.clearModels(['Category', 'Course'], function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});
 
// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'Category',
        'documents': [
            {
                'title': 'Technology'
                // 'value': 200
            },
            {
                'title': 'Science'
                // 'value': 400
            }
        ]
    },

    {
      'model': 'Course',
      'documents': [
          {
              'title': 'Rocket Science 101',
              'topic': 'The basics of rocket science.',
              'synopsis': '3...2...1...Blast off!!!!',

          },

      ]
  },

    
];