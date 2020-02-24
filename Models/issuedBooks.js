const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Creating the document structure for a book
 */
const IssueSchema = new Schema({
    bookid: {
        type: String,
        require: true,
    },
    issued_date: {
        type: String,
        require: true
    },
    return_date: {
        type: String,
        require: true
    },
    issued_librarian: {
        type: String,
        require: true
    },
    member_name: {
        type: String,
        require: true
    }
});

// Creating a model and exporting
module.exports = mongoose.model('IssuedBook', IssueSchema);
