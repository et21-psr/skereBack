var express = require('express');
var router = express.Router();
var models = require("./../mysql");
/* GET users listing. */
router.get('/', function(req, res, next) {

  models.comentario.findAll().then(result => {
    res.status(200).jsonp(result);

  })
});

module.exports = router;
