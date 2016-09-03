/**
 * Created by denis on 19.08.16.
 */

var express = require('express');
var router = express.Router();
var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function(username, password, done) {
        if(username == 'admin' && password == '123') {
            return done(null, {username : 'admin'});
        }
        done(null, false);
    })
);

passport.serializeUser(function(user, done) {
    done(null, user.username);
});

passport.deserializeUser(function(user, done) {
    done(null, { username : username });
});

router.get('/', function(req, res, next) {
    res.render('auth');
});

module.exports = passport;
module.exports = router;