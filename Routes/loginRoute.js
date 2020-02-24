var Express = require("express");
var Controller = require("../Controllers/loginController");

var router = Express.Router();

router.post('/', function (req, res) {

    Controller.login(req.body).then(function (data) {
        console.log('Route data' + data)
        res.status(data.status).send({member: data.member});
    }).catch(function (err) {
        console.log("------------------------------" + err.message)
        res.status(err.status).send({message: err.message});
    })

});

module.exports = router;

