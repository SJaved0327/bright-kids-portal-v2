const passport = require("passport");
const session = require("express-session");
const FileStore = require('session-file-store')(session);
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");
const bcrypt = require("bcryptjs");
const port = process.env.NODE_PORT || '' ; //only use port in DEV
const host = process.env.HOST;


// Configure Passport...


app.use(session({
    name: "server-session-cookie-id",
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
    store: new FileStore(),
    unset: "destroy",
    cookie: {
      maxAge: null,
      httpOnly: false,
      path: "/",
      secure: false
    }
  }));
