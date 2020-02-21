const Express = require("express");
const router = Express.Router();

router.get('/', function (req, res) {
    res.status(200).send({data: "Library Management  -- Version 1.0 -- Health"});
})

module.exports = router;