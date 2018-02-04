module.exports = function(passport){

  app.get("/auth/signin",
    passport.authenticate("local-signup",
      { failureRedirect: "/auth/error" }),
      function(req, res){

        req.login(req.user, function(err){

          if(err){
            console.log(err);
            res.redirect("/auth/error");
          }
          req.session.save(function(){
            if(req.user.user_type === "barber"){
              res.redirect("/dashboard/" + req.user.id);
            } else{
              res.redirect("/");
            }
          });
        });
  });


app.get("/auth/signup", function(req, res){
    passport.authenticate("local-signin",
    { failureRedirect: "/auth/error" }),
    function(req, res){

      req.login(req.user, function(err){

        if(err){
          console.log(err);
          res.redirect("/auth/error");
        }
        req.session.save(function(){
          if(req.user.user_type === "barber"){
            res.redirect("/dashboard/" + req.user.id);
          } else if(req.user.user_type === "client"){
            res.redirect("/client/" + req.user.id);
          } else{
            res.redirect("/");
          }
        });
      });
};
})


    
}