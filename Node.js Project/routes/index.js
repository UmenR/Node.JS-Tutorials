var express = require('express');
var router = express.Router();
var moment = require('moment');


/* GET index page. */
router.get('/', function(req, res, next) {
    var datefin=(moment().format(" D MMMM YYYY h:mm:ss a"));
    console.log(datefin);
  res.render('index', { title: 'Index Page' , date: datefin });
});

module.exports = router;
