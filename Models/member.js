const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating the document structure for a member
const MemberSchema = new Schema({
    username: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    membertype: {
        type: String,
        require: true
    }
});

// Creating a model and exporting
module.exports = mongoose.model('Member', MemberSchema);
