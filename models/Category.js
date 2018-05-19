var mongoose = require("mongoose");


var Schema = mongoose.Schema;

CategorySchema = new Schema({
    // _id:         {type: ObjectId},
    title:       {type: String, ref:"Course"},


});
var Category = mongoose.model('Category', CategorySchema);//add