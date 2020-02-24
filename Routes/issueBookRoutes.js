var Express = require("express");
var Controller = require("../Controllers/issueBookController");

var router = Express.Router();

/**
 * API endpoint to accept Requests
 * Ex:- API endpoint to get accept post requests to /library/issue/
 */
router.post('/', function (req, res) {

    Controller.issueaBook(req.body).then(function (data) {
        res.status(data.status).send({message: data.message});
    }).catch(function (err) {
        console.log("------------------------------" + err.message)
        res.status(err.status).send({message: err.message});
    })

});

router.get('/', function (req, res) {

    Controller.getAll().then(function (data) {
        res.status(data.status).send({data: data.books});
    }).catch(function (err) {
        console.log("------------------------------" + err.message)
        res.status(err.status).send({message: err.message});
    })

});

module.exports = router;