// Require models
var db = require('../models');

// Routes
// =====================================================
module.exports = function(app) {


  // app.get("/*", function (req, res) {
  //   if (req.isAuthenticated()) {
  //     next();
  //   } else {
  //     res.redirect("/");
  //   }

  // });


  // GET
  // Find all students and return them to the user with res.json
  app.get("/api/students", function(req, res) {
    db.Student.findAll({})
      .then(function(dbStudent) {

        res.json(dbStudent);

      });
  });

  // GET
  // Find one Student with the id in req.params.id and return them to the user with res.json
  app.get("/api/students/:id", function(req, res){

    db.Student.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbStudent){
      res.json(dbStudent)
      console.log(dbStudent);
    })
  });

  // Create a Student with the data available to us in req.body
  app.post("/api/students", function(req, res){
    // console.log request
    console.log(req.body);
    db.Student.create(req.body).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });

  // // Create a Student with the data available to us in req.body
  // app.post("/api/students/:id", function(req, res){
  //   // console.log request
  //   console.log(req.body);

  //   db.Student.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .updateValue({

  //   })
  //   .then(function(dbStudent){
  //     res.json(dbStudent)
  //   })

  //update

};


/*
var db = require("../models");

module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  app.get("/api/authors", function(req, res) {
    db.Author.findAll({}).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.get("/api/authors/:id", function(req, res) {
     // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Author.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.post("/api/authors", function(req, res) {
     // Create an Author with the data available to us in req.body
    console.log(req.body);
    db.Author.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.delete("/api/authors/:id", function(req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

};
*/