const mongoose = require("mongoose");
const Schema = mongoose.Schema;

CategorySchema = new Schema({
    title: {
        type: String
    },
    created: {
        type: Date, 
        default: Date.now 
    }
});
const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;