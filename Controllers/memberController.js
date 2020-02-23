// Getting the exported Member model
const MemberSchema = require('../Models/member');

// Creating a Controller class for books and define each operation on books in it as functions
var Controller = function () {

    this.insertMember = function (data) {

        // Promises are employed to obtain the asynchronous behavoir and set the values to book instance
        return new Promise(function (resolve, reject) {
            var member = new MemberSchema({
                username: data.username,
                name: data.name,
                password: data.password,
                membertype: 'user'
            });

            //save book details. save function in schema model
            member.save().then(function () {
                resolve({status: 200, message: "Member added successfully!"});
            }).catch(function (err) {
                console.log(err);
                reject({status: 500, message: "Member saving failed!!!"});
            })
        })
    };
// Retrieves all the exiting members
    this.getAllMembers = function (data) {

        return new Promise(function (resolve, reject) {
            MemberSchema.find().then(function (data) {
                resolve({status: 200, members: data});
            }).catch(function (err) {
                console.log(err);
                reject({status: 404, message: err});
            })

        })

    };

//Remove a member by username
    this.removeMember = function (username) {

        return new Promise(function (resolve, reject) {
            MemberSchema.findOneAndDelete({username: username}).then(function (data) {
                resolve({status: 200, message: "Member removed " + data});
            }).catch(function (err) {
                console.log(err);
                reject({status: 404, message: err});
            });

        })

    };

// Updates details of a member
    this.updateMember = function (data) {

        return new Promise(function (resolve, reject) {
            MemberSchema.findOneAndUpdate({username: data.username}, {
                name: data.name,
                password: data.password

            }).then(function (data) {
                resolve({status: 200, message: "Member updated " + data});
            }).catch(function (err) {
                console.log(err);
                reject({status: 404, message: err});
            });

        })

    };

// Retrieves a members when the member name is given
    this.searchMember = function (data) {

        return new Promise(function (resolve, reject) {

            MemberSchema.find({name: {$regex: data.name, $options: "i"}}).then(function (data) {
                resolve({status: 200, members: data});
            }).catch(function (err) {
                console.log(err);
                reject({status: 404, message: err});
            })

        })

    };

};

// Exporting a instance of the Controller class
module.exports = new Controller();