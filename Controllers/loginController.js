// Getting the exported Member model
const MemberSchema = require('../Models/member');

var Controller = function () {
    // Look for a existing member and return details
    this.login = function (data) {

        return new Promise(function (resolve, reject) {

            MemberSchema.find({username: data.username, password: data.password}).then(function (data) {
                resolve({status: 200, member: data});
            }).catch(function (err) {
                console.log(err);
                reject({status: 404, message: err});
            })

        })

    };
};

// Exporting a instance of the Controller class
module.exports = new Controller();