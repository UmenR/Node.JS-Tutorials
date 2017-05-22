var express = require('express');
var router = express.Router();
var moment = require('moment');


/* GET index page. */
router.get('/', function(req, res, next) {
    var datefin=(moment().format(" D MMMM YYYY h:mm:ss a"));
    res.render('index', { title: 'Basket Page' , date: datefin });
});

module.exports = router;
