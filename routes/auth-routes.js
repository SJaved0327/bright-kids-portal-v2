const express = require("express");
const router = express.Router();
var db = require("../db")

module.exports = function(passport){

  router.post("/signin",
  passport.authenticate("local-signin",

    function(req, res){
      req.login(req.user, function(err){
        if(err){
          console.log(err);
        }
        req.session.save(function(){
 
        })
      })
    })
  )


  // router.post("/signup",
  
  //   function(req, res){
  //     req.login(req.user, function(err){
  //       if(err){
  //         console.log(err);
  //       }
  //       req.session.save(function(){
  //       })
  //     })
  //   })

  router.post('/signup', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login'); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.redirect('/users/' + user.username);
      });
    })(req, res, next);
  });


    return router;
  }


  
  
  // function(req,res){

    
  //   var username = req.username;
  //   var password = req.password;
  //   console.log(`username: ${username}`);
  //   console.log(`password: ${password}`);
    
  //   res.json({"signin response received!":"signin"})
  // });


  //   passport.authenticate("local-signup",
  //     { failureRedirect: "/auth/error" }),
  //     function(req, res){

  //       req.login(req.user, function(err){

  //         if(err){
  //           console.log(err);
  //           res.redirect("/auth/error");
  //         }
  //         req.session.save(function(){
  //           if(req.user.user_type === "barber"){
  //             res.redirect("/dashboard/" + req.user.id);
  //           } else{
  //             res.redirect("/");
  //           }
  //         });
  //       });
  // }
// );


// app.get("/auth/signup", function(req, res){

//   res.json({"signup response received": "signup"})
// });
//     passport.authenticate("local-signin",
//     { failureRedirect: "/auth/error" }),
//     function(req, res){

//       req.login(req.user, function(err){

//         if(err){
//           console.log(err);
//           res.redirect("/auth/error");
//         }
//         req.session.save(function(){
//           if(req.user.user_type === "barber"){
//             res.redirect("/dashboard/" + req.user.id);
//           } else if(req.user.user_type === "client"){
//             res.redirect("/client/" + req.user.id);
//           } else{
//             res.redirect("/");
//           }
//         });
//       });
// };
// })

