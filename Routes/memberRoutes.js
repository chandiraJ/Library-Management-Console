var Express = require("express");
var Controller = require("../Controllers/memberController");

var router = Express.Router();

// API endpoint to accept Requests
// Ex:- API endpoint to get accept post requests to /library/member/

router.post('/', function (req, res) {

    Controller.insertMember(req.body).then(function (data) {
        res.status(data.status).send({message: data.message});
    }).catch(function (err) {
        console.log("------------------------------" + err.message);
        res.status(err.status).send({message: err.message});
    })

})

router.get('/getall', function (req, res) {

    Controller.getAllMembers().then(function (data) {
        res.status(data.status).send({data: data.members});
    }).catch(function (err) {
        console.log(err);
        res.status(err.status).send({message: err.message});
    })

});
//
// router.post('/searchbook', function (req, res) {
//
//     Controller.searchBooks(req.body).then(function (data) {
//         res.status(data.status).send({data: data.books});
//     }).catch(function (err) {
//         console.log(err);
//         res.status(err.status).send({message: err.message});
//     })
//
// });
//
router.delete('/removemember' +'/:username', function (req, res) {

    Controller.removeMember(req.params.username).then(function (data) {
        res.status(data.status).send({data: data.message});
    }).catch(function (err) {
        console.log(err);
        res.status(err.status).send({message: err.message});
    })

});

router.put('/updatemember', function (req, res) {

    Controller.updateMember(req.body).then(function (data) {
        res.status(data.status).send({data: data.message});
    }).catch(function (err) {
        console.log(err);
        res.status(err.status).send({message: err.message});
    })

});

router.post('/searchmember', function (req, res) {

    Controller.searchMember(req.body).then(function (data) {
        res.status(data.status).send({data: data.members});
    }).catch(function (err) {
        console.log(err);
        res.status(err.status).send({message: err.message});
    })

});

module.exports = router;