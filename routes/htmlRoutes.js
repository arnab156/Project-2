var db = require("../models");

// Login start
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
// Login end

module.exports = function(app) {


  // Login start
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("../views/customer.handlebars");
    }
    res.render(path.join(__dirname, "../views/index.handlebars"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("../views/customer.handlebars");
    }
    res.render(path.join(__dirname, "../views/index.handlebars"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.render(path.join(__dirname, "../views/customer.handlebars"));
  });


// Login fornt-desk
app.get("/loginfrontdesk", function(req, res) {
  if (req.user) {
    res.redirect("../views/frontdesk.handlebars");
  }
  res.render(path.join(__dirname, "../views/frontdesk.handlebars"));
});
app.get("/frontdesk", isAuthenticated, function(req, res) {
  res.render(path.join(__dirname, "../views/frontdesk.handlebars"));
});


// Login service provider
app.get("/loginprovider", function(req, res) {
  if (req.user) {
    res.redirect("../views/provider.handlebars");
  }
  res.render(path.join(__dirname, "../views/provider.handlebars"));
});
app.get("/provider", isAuthenticated, function(req, res) {
  res.render(path.join(__dirname, "../views/provider.handlebars"));
});



  app.get("/logout", function(req, res) {
    res.render(path.join(__dirname, "../views/index.handlebars"));
  });

// Login end






  // Load index page
  app.get("/customer/:id", function(req, res) {
    db.customer.findOne({
      where: {
        id: req.params.id
        }
    }).then(function(customer) {
      res.render("customer", {
        note: "Welcome!",
        customerFN: customer.firstName,

      });
    });

    // db.appointment.findOne({ 
    //   where: {
    //     id: req.params.id
    //     }
    // }).then(function(appointment) {
    //     res.render("customer", {
    //       msg: "You have the following appointments with us: ",
    //       service: appointment.service,
    //       dateTime: appointment.dateTime,
    //       // serviceprovider name from ID
    //     });

    //     db.serviceprovider.findOne({
    //       where:{
    //         id : appointment.serviceProviderId
    //       }
    //     }).then(function(serviceprovidername){
    //       res.render("customer", {
    //         selectedStylist: serviceprovidername.firstName
    //       });
    //     });
    //   });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });

    // Render 404 page for any unmatched routes

    // Hello world
  app.get("/", function(req, res) {
    res.render("index");
  });




  // app.get("/frontdesk", function(req, res) {
  //   res.render("frontdesk");

//for each create HTML card and append picture, name on it

//for each service providor, append html of availability
  // });



};//end of the module.exports