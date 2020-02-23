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

});

router.get('/getall', function (req, res) {

    Controller.getAllBooks().then(function (data) {
        res.status(data.status).send({data: data.books});
    }).catch(function (err) {
        console.log(err);
        res.status(err.status).send({message: err.message});
    })

});

router.post('/searchbook', function (req, res) {

    Controller.searchBooks(req.body).then(function (data) {
        res.status(data.status).send({data: data.books});
    }).catch(function (err) {
        console.log(err);
        res.status(err.status).send({message: err.message});
    })

});

router.delete('/removebook' +'/:id', function (req, res) {

    Controller.removeBook(req.params.id).then(function (data) {
        res.status(data.status).send({data: data.message});
    }).catch(function (err) {
        console.log(err);
        res.status(err.status).send({message: err.message});
    })

});

router.put('/updatebook', function (req, res) {

    Controller.updateBook(req.body).then(function (data) {
        res.status(data.status).send({data: data.message});
    }).catch(function (err) {
        console.log(err);
        res.status(err.status).send({message: err.message});
    })

});

module.exports = router;