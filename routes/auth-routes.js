const express = require("express");
const router = express.Router();
var db = require("../models")

module.exports = function(passport){

  router.post('/signin', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.status(403).send("Not logged in."); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.status(200).send("log in successful"); 
     
      });
    })(req, res, next);
  });

  router.post('/signup', function(req, res, next) {
    passport.authenticate('local-signup', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login'); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.redirect('/users/' + user.username);
      });
    })(req, res, next);
  });


    return router;
  }
