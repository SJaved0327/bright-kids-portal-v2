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
const router = express.Router();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const passport = require('./config/passport')(app)

// Requiring our models for syncing
const db = require("./models");

// Routes
// =============================================================
// require("./routes/family-api-routes")(app);
require("./routes/student-api-routes")(app);
// require("./routes/reports-api-routes")(app);



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});

// Authentication 
// ===============================================================
const authRoutes = require("./routes/auth-routes")(passport);
app.use("/auth", authRoutes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


