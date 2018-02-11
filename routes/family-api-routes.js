var db = require('../models');

module.exports = function (app) {

  app.get("/*", function (req, res) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/");
    }

  });





  // Find parent ID models and return them with res.json
  app.get("/api/parents", function (req, res) {
    db.Parents.findAll({}).then(function (dbAuthor) {
      res.json(dbAuthor);
    });
  });

  // Find Parent ID with the id in req.params.id and return them to the user with res.json
  app.get("/api/parents/:id", function (req, res) {
    db.Parents.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbParents) {
      res.json(dbParents)
    })
  });

  // Create Parents ID with the data available to us in req.body
  app.post("/api/parents", function (req, res) {
    // console.log request
    console.log(req.body);
    db.Parents.create(req.body).then(function (dbParents) {
      res.json(dbParents);
    });
  });

};