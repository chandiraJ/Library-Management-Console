var Express = require("express");
var Controller = require("../Controllers/bookController");

var router = Express.Router();

// API endpoint to accept Requests
// Ex:- API endpoint to get accept post requests to /library/book/

router.post('/', function (req, res) {

    Controller.getNewId().then(function (newid) {
        Controller.insertBook(req.body, newid.id).then(function (data) {
            res.status(data.status).send({message: data.message});
        }).catch(function (err) {
            console.log("------------------------------" + err.message)
            res.status(err.status).send({message: err.message});
        })
    }).catch(function (err) {
        res.status(err.status).send({message: err.message});
    });

})
module.exports = router;