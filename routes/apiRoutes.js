var db = require("../models");
var passport = require("passport");

module.exports = function(app) {


// Login start
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

// login in front-desk
  app.post("/api/loginfrontdesk", passport.authenticate("local"), function(req, res) {
      res.json("/frontdesk");
  });



  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });



// Login end





  // Get all examples
  app.get("/api/serviceprovider", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/customers/", function(req, res) {
    db.customer.create(req.body).then(function(testdb) {
      res.json(testdb);
    });
  });


  app.post("/api/customerlogin", passport.authenticate('local'),function(req,res){
     // console.log (req.user);
     if(req.user) {
       //valid
       res.json()
     } else { // invalid }
    }
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });



  // app.post("/api/customers/", function(req, res) {
  //   console.log(req.body);
  //   db.Customer.create({
  //         firstName: req.body.firstName,
  //         lastName: req.body.lastName,
  //         address_1: req.body.address_1,
  //         address_2: req.body.address_2,
  //         city: req.body.city,
  //         state: req.body.state,
  //         zip: req.body.zip,
  //         phone: req.body.phone,
  //         email: req.body.email,
  //         password: req.body.password,
  //         credit_card: req.body.credit_card,
  //         expiration: req.body.expiration,
  //         cvc: req.body.cvc,
  //         comment: req.body.comment
  //       }).then(function(testdb) {
  //     res.json(testdb);
  //   });
  // });


  // app.post("/api/posts", function(req, res) {
  //   console.log(req.body);
  //   db.Post.create({
  //     title: req.body.title,
  //     body: req.body.body,
  //     category: req.body.category
  //   })
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });




};
