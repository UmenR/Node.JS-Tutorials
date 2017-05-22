/**
 * Created by ummi on 5/22/2017.
 */
var moment = require('moment');
var express = require('express');
var router = express.Router();



/* GET headfile page. */
router.get('/', function(req, res, next) {
    var datefin=(moment().format(" D MMMM YYYY h:mm:ss a"));
    res.render('headfile', { date: datefin });
});

module.exports = router;
