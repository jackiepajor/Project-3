var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// new CourseSchema object
var CourseSchema = new Schema({
    title: {
        type: String
    },
    topic: {
        type: String
    },
    synopsis: {
        type: String
    },
    requirements: [{
        type: String
    }],
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    units: [{
        type: Schema.Types.ObjectId,
        ref: "Unit"
      }]
});
// This creates our model from the above schema, using mongoose's model method
var Course = mongoose.model("Course", CourseSchema);

// Export the Course model
module.exports = Course;
