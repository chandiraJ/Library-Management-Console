// Getting the exported Book model
const BookSchema = require('../Models/book');

// Creates a Controller class for books and define each operation on books in it as functions
var Controller = function () {

    this.insertBook = function (data, newid) {

        // Promises are employed to obtain the asynchronous behavoir and set the values to book instance
        return new Promise(function (resolve, reject) {
            var book = new BookSchema({
                bookid: newid,
                title: data.title,
                author: data.author,
                status: 'Available'
            });
            //save book details. save function in schema model
            book.save().then(function () {
                resolve({status: 200, message: "Book added successfully!"});
            }).catch(function (err) {
                console.log(err);
                reject({status: 500, message: `Book saving failed!!!`});
            })
        })
    };

// Generates a new id for a new book
    this.getNewId = function () {

        return new Promise(function (resolve, reject) {

            BookSchema.find().sort({'_id': -1}).limit(1).then(function (data) {
                let num;

                if (!data.length) {
                    num = 'BK1'
                } else {
                    num = data[0].bookid.split('K');
                    num = parseInt(num[1], 10) + 1;
                    num = 'BK' + num;
                }

                return num;

            }).then(function (num) {
                resolve({id: num})
            }).catch(function (err) {
                console.log(err);
                reject({status: 500, message: `Couldn't Creat a New ID!!!`})
            })
        })
    };

// Retrive all the exixting books
    this.getAllBooks = function (data) {

        return new Promise(function (resolve, reject) {
            BookSchema.find().then(function (data) {
                resolve({status: 200, books: data});
            }).catch(function (err) {
                console.log(err);
                reject({status: 404, message: err});
            })

        })

    };

//Remove a book by its BookID
    this.removeBook = function (id) {
        console.log(id)
        return new Promise(function (resolve, reject) {
            BookSchema.findOneAndDelete({bookid: id}).then(function (data) {
                resolve({status: 200, message: "Book removed " + data});
            }).catch(function (err) {
                console.log(err);
                reject({status: 404, message: err});
            });

        })

    };
// Update details of a book
    this.updateBook = function (data) {
        return new Promise(function (resolve, reject) {
            BookSchema.findOneAndUpdate({bookid: data.bookid}, {
                title: data.title,
                author: data.author,
                status: data.status
            }).then(function (data) {
                // console.log(data)
                resolve({status: 200, message: "Book updated " + data});
            }).catch(function (err) {
                console.log(err);
                reject({status: 404, message: err});
            });

        })

    };

};

// Exporting a instance of the Controller class
module.exports = new Controller();
