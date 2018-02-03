// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const sequelize = require("sequelize");


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// serves static assets during build
app.use(express.static("client/build"));

// Requiring our models for syncing
const db = require("./models");

// Routes
// =============================================================
// require("./routes/family-api-routes")(app);
require("./routes/student-api-routes")(app);
// require("./routes/reports-api-routes")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});


// Passport
// const passport = require("./config/passport.js")(app);

//Routes goes here
// const passportRoute = require("./routes/pass-routes.js")(passport);

