/**
 * Getting the exported Member model
 * @type {Model}
 */
const MemberSchema = require('../Models/member');

var Controller = function () {
    /**
     * Look for a existing member and return details
     * @param data
     * @returns {Promise<unknown>}
     */
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

/**
 * Exporting a instance of the Controller class
 * @type {Controller}
 */
module.exports = new Controller();