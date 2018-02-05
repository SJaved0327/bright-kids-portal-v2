// const passport = require("passport");
// const session = require("express-session");
// const FileStore = require('session-file-store')(session);
// // const FacebookStrategy = require("passport-facebook").Strategy;
// // const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const LocalStrategy = require("passport-local").Strategy;
// const db = require("../models");
// const bcrypt = require("bcryptjs");
const port = process.env.NODE_PORT || '' ; //only use port in DEV
const host = process.env.HOST;


// // Configure Passport...

// app.use(session({
//     name: "server-session-cookie-id",
//     secret: process.env.SESSION_SECRET,
//     saveUninitialized: true,
//     resave: true,
//     store: new FileStore(),
//     unset: "destroy",
//     cookie: {
//       maxAge: null,
//       httpOnly: false,
//       path: "/",
//       secure: false
//     }
//   }));



  var express = require('express');
  var app = express();
  var session = require('express-session');
  var MySQLStore = require('express-mysql-session')(session);
   
  var options = {
      host: host,
      port: port,
      user: 'root',
      password: '',
      database: 'brightKids_DB'
  };
   
  var sessionStore = new MySQLStore(options);
   
  app.use(session({
      key: 'session_cookie_name',
      secret: process.env.SESSION_SECRET,
      store: sessionStore,
      resave: false,
      saveUninitialized: false
  }));