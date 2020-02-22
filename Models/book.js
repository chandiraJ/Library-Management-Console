const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating the document structure for a book
const BookSchema = new Schema({
    bookid: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
        text: true
    },
    author: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    }
});

// Creating a model and exporting
module.exports = mongoose.model('Book', BookSchema);
