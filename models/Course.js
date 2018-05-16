var mongoose = require("mongoose");

// reference to the Schema constructor
var Schema = mongoose.Schema;

// new CourseSchema object
var CourseSchema = new Schema({

    title: {
        
    },

    topic: {

    },

    synopsis: {

    },

    unit: [{
        title: {

        },
        synopsis: {

        },
        lessons: [{
            title: {

            },
            image: {

            },
            video: {

            },
            body: {

            }
        }],
    }],



 
})
// This creates our model from the above schema, using mongoose's model method
var Course = mongoose.model("Course", CourseSchema);

// Export the Course model
module.exports = Course;
