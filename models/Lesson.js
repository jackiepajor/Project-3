var mongoose = require("mongoose");
var Schema = mongoose.Schema;

LessonSchema = new Schema({
    title: {type: String},
    // images:      [{type: mongoose.SchemaTypes.Url}],
    // videos:      [{type: mongoose.SchemaTypes.Url}],
    description: {type: String},
    images: [{type: String}],
    videos: [{type: String}],
    body: {type: String},
    created: {
        type: Date, 
        default: Date.now 
    }
});
var Lesson = mongoose.model('Lesson', LessonSchema);//add

module.exports = Lesson;