require('dotenv').config();
const jwt = require('jsonwebtoken');
var db = require('../../models')
const PassportLocalStrategy = require('passport-local').Strategy;
const bcrypt = require("bcrypt")

/**
 * Return the Passport Local Strategy object.
 */

module.exports = new PassportLocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true
}, (req, email, password, done) => {

    // find a user by email address
    return db.Users.findOne({
        where:
            { email: email }
    }).then(returnedUser => {
        if (returnedUser == null) {
            const error = new Error('No user with that email exists');
            error.type = 'Incorrect credentials error';
            return done(error);
        }
        console.log(returnedUser);
        var hash = returnedUser.password;

        // check if a hashed user's password is equal to the password input by the user

        bcrypt.compare(password, hash).then(function (res) {

            if (res) {

                const payload = {
                    sub: returnedUser
                };

                // create a token string
                const token = jwt.sign(payload, process.env.SESSION_SECRET);

                return done(null, token);

            } else {

                const error = new Error('Incorrect email or password');
                error.name = 'IncorrectCredentialsError';

                return done(error);
            }
        });

    })
});