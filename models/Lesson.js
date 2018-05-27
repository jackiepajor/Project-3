var mongoose = require("mongoose");
var Schema = mongoose.Schema;

LessonSchema = new Schema({
    title:       {type: String},
    // images:      [{type: mongoose.SchemaTypes.Url}],
    // videos:      [{type: mongoose.SchemaTypes.Url}],
    images: [{type: String}],
    videos: [{type: String}],
    body: {String},
    created: {type: Date, default: Date.now }
});
var Lesson = mongoose.model('Lesson', LessonSchema);//add

module.exports = Lesson;