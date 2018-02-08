var db = require("../../models")
const PassportLocalStrategy = require('passport-local').Strategy;
var bcrypt = require("bcrypt")

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {

    var email = email.trim();
    var password = password.trim()

    db.Users.findOne({
        where: { email: email },
    }).then(returnedUser => {

        if (returnedUser == null) {

            db.Users.create({
                email: email,
                password: password
            })

                .then(created => {
                    req.session.save(function(){
                        
                               })
                    return done(null);
                })


        } else{

            const error = new Error('Email already in system');
            error.type = 'duplicate error';
            return done(error);
        };

    })


});