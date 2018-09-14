var db = require("../models");
var passport = require("passport");

module.exports = function(app) {
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
  // });



};
