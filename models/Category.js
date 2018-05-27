const mongoose = require("mongoose");
const Schema = mongoose.Schema;

CategorySchema = new Schema({
    title: {
        type: String
    }
});
const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;