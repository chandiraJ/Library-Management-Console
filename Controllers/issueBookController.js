/**
 * Getting the exported IssueBook model
 */
const IssueBookSchema = require('../Models/issuedBooks');

/**
 * Creating a Controller class for book issuing and define each operation on issuing in it as functions
 * @constructor
 */
var Controller = function () {
    
    this.issueaBook = function (data) {
        var dates = util();
        /**
         * Promises are employed to obtain the asynchronous behavoir and set the values to issueBook instance
         */
        return new Promise(function (resolve, reject) {
            var issue = new IssueBookSchema({
                bookid: data.bookid,
                issued_date: dates.issuedate,
                return_date: dates.returndate,
                issued_librarian: data.issued_librarian,
                member_name: data.member_name
            });
            /**
             * save book issue details. save function in schema model
             */
            issue.save().then(function () {
                resolve({status: 200, message: "Book issued successfully!"});
            }).catch(function (err) {
                console.log(err);
                reject({status: 500, message: `Book issuing failed!!!`});
            })
        })
    };
}

/**
 * Returns the current date as issued date and return date from 2 weeks of date of issue
 * @returns {{returndate: *, issuedate: *}}
 */
function util () {
    var today = new Date();

    var issuedate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    today.setDate(today.getDate() + 14);
    var returndate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    var dates = {
        "issuedate": issuedate,
        "returndate": returndate
    }
    // console.log('issuedate ' + issuedate);
    // console.log('returndate' + returndate);
    return dates;
}


/**
 * Exporting a instance of the Controller class
 * @type {Controller}
 */
module.exports = new Controller();