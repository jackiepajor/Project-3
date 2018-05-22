
var mongoose = require("mongoose");

// reference to the Schema constructor
var Schema = mongoose.Schema;


var UnitSchema = new Schema ({

    name: {
        type: String
    },
    author: {
        type: String
    },
    category: {
        type: String 
    },
    lessons: [{
        type: Schema.Types.ObjectId,
        ref: "Lesson"
      }]
});



var Unit = mongoose.model("Unit", UnitSchema);

// Export the Unit model
module.exports = Unit;