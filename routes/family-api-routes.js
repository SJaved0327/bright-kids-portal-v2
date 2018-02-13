var db = require('../models');

module.exports = function(app) {

  // Find families ID models and return them with res.json
  app.get("/api/families", function(req, res) {
    brightKids_DB.findAll({}).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  // Find families ID with the id in req.params.id and return them to the user with res.json
  app.get("/api/families/:id", function(req, res){
    brightKids_DB.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbParents){
      res.json(dbParents)
    })
  });

  // Create families ID with the data available to us in req.body
  app.post("/api/families", function(req, res){
    // console.log request
    console.log(req.body);
    brightKids_DB.create(req.body).then(function(dbParents) {
      res.json(dbParents);
    });
  });

};