require('dotenv').config();
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
const bcrypt = require("bcrypt");
const port = process.env.HEROKUPORT || ''; //only use port in DEV
const host = process.env.HEROKUHOST;
const username = process.env.HEROKUSERNAME;
const password = process.env.HEROKUPASSWORD;
const database = process.env.HEROKUDATABSE;
const secret = process.env.SESSION_SECRET;
const mysql = require("mysql")

// dependencies from NPM example.
var express = require('express');
var app = express();
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var options;


module.exports = function (app) {

   console.log( process.env.NODE_ENV )

    // // Configure Passport...

    if (process.env.NODE_ENV !== "production") {

        //  local credentials for SequelPro or equivalent RDBMS
        console.log("local db")

        options = {
            
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '',
            database: 'brightKids_DB'
        };

    } else {
        //  JAWSDB credentials
        console.log("JAWS db")
        options = {
            host: host,
            port: port,
            user: username,
            password: password,
            database: database
        };


    }

    var sessionStore = new MySQLStore(options);

    var connection = mysql.createConnection(options);

    console.log(options)

    app.use(session({
        secret: secret,
        store: sessionStore,
        resave: false,
        saveUninitialized: false
    }))

    return passport;
};