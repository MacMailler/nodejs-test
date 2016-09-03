/**
 * Created by denis on 19.08.16.
 */
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('join');
});

router.post('/', function(req, res, next) {

});
module.exports = router;