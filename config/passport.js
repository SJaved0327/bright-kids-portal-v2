// misc. dependencies
require('dotenv').config();
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
var db = require("../models");
const bcrypt = require("bcrypt");

//only used in DEV
const port = process.env.HEROKUPORT;
const host = process.env.HEROKUHOST;
const username = process.env.HEROKUSERNAME;
const password = process.env.HEROKUPASSWORD;
const database = process.env.HEROKUDATABSE;

// dependencies for mysqlstore
const secret = process.env.SESSION_SECRET;
var express = require('express');
var app = express();
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
const mysql = require("mysql")
var options;

module.exports = function (app) {

    console.log(process.env.NODE_ENV)

    // express session middleware
    // database selected based on whether production or development

    if (process.env.NODE_ENV !== "production") {

        //  local credentials for SequelPro or equivalent RDBMS
        console.log("local db")
        options = {

            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '',
            database: 'brightKids_DB',
            schema: {
                tableName: 'Sessions',
                columnNames: {
                    session_id: 'session_id',
                    expires: 'expires',
                    data: 'data'
                }
            }

        };

    } else {
        //  JAWSDB credentials
        console.log("JAWS db")
        options = {
            host: host,
            port: port,
            user: username,
            password: password,
            database: database,
            schema: {
                tableName: 'Sessions',
                columnNames: {
                    session_id: 'session_id',
                    expires: 'expires',
                    data: 'data'
                }
            }
        }


    }



    var sessionStore = new MySQLStore(options);

    var connection = mysql.createConnection(options);

    console.log(options)

    app.use(session({
        key: 'session_cookie_name',
        secret: secret,
        store: sessionStore,
        resave: false,
        saveUninitialized: false,
        cookie: {
            path: "/auth"
        }
    }));


    app.use(passport.initialize());

    app.use(passport.session());

    // sign up
    passport.use("local-signup", new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        session: true,
        passReqToCallback: true
    }, (req, email, password, done) => {

        db.Users.findOne({
            where: {
                email: email
            }
        }).then(user => {
            // User already exists.
            if (user) {
                return done(null, false);
            } else {
                var newUser = {
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 10) // Encrypt passwrd.
                }
                // Create the new user.
                db.Users.create(newUser
                ).then(function (nUser) {
                    return done(null, nUser);
                });
            }
        });
    }
    ));

    // Local sign-in
    passport.use("local-signin", new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        session: true,
        passReqToCallback: true
    }, (req, email, password, done) => {

        db.User.findOne({
            where: {
                email: email
            }
        }).then(user => {
            // User must exist to sign in.
            if (!user) {
                return done(null, false);
            } // Compare the encrypted passwrd.
            if (!bcrypt.compareSync(password, user.password)) {
                return done(null, false);
            }
            return done(null, user);
        });
    }
    ));


    // Serialize and deserialize the user.
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });


    return passport;
};