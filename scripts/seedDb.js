const mongoose = require("mongoose");

// Requiring the `Category` model for accessing the `examples` collection
const Category = require("../models/Category.js");
const seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/grasshopper', function () {
    // Load Mongoose models
    seeder.loadModels([
        '../models/Category.js',
        '../models/Course.js',
        '../models/Unit.js',
        '../models/Lesson.js',
    ]);

    // Clear specified collections
    seeder.clearModels(['Category', 'Course', 'Unit', 'Lesson'], function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
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
            },
            {
                'title': 'Science'
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
            }
        ]
    },
    {
        'model': 'Unit',
        'documents': [
            {
                'name': 'Unit 1',
                'author': 'Jesse Springer',
                'category': 'Science',
            }
        ]
    },
    {
        'model': 'Lesson',
        'documents': [
            {
                'title': 'How to Land Your Spaceship on the Moon in 5 Easy Steps',
            }
        ]
    }
];