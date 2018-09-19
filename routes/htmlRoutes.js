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
      res.redirect("../views/customerComplete.handlebars");
    }
    res.render(path.join(__dirname, "../views/index.handlebars"));
  });


  app.get("/api/customerComplete/:id", isAuthenticated, function(req, res) {
    console.log('WE HIT THE API api/customerComplete!!!!', req.params.id)
    var customerId = req.params.id
    console.log(customerId);
        db.Customer.findAll({
          where: {
            id: customerId,
          }
        }).then(function(data){
          console.log("------------- i am in html route of customercomplete/:id");

          console.log("I am data: HERERERE")
          console.log(data);
          console.log(data[0].dataValues.firstName);
           res.render("customerComplete",
           {
             firstName: data[0].dataValues.firstName,
             phone: data[0].dataValues.phone,
             address_1:data[0].dataValues.address_1,
             address_2:data[0].dataValues.address_2,
             city:data[0].dataValues.city,
             zip:data[0].dataValues.zip,
             state:data[0].dataValues.state,
          }); 

          console.log("I am data: " + data);
          //  res.render("customerComplete",{firstName: data.dataValues.firstName}); 
           res.render("../views/customerComplete.handlebars");

         });
  });

  // app.get("/api/customerComplete", function(req, res) {
  //   // if (req.user) {
  //   //   res.redirect("../views/customer.handlebars");
  //   // }
  //   res.render(path.join(__dirname, "../views/customerComplete"));
  // });



  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("../views/customerComplete.handlebars");
    }
    res.render(path.join(__dirname, "../views/customerComplete.handlebars"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.render(path.join(__dirname, "../views/customerComplete.handlebars"));
  });

  app.get("/logout", function(req, res) {
    res.render(path.join(__dirname, "../views/index.handlebars"));
  });

// Login end

  // Load index page
  app.get("/customer/:id", function(req, res) {
    db.Customer.findOne({
      where: {
        id: req.params.id
        }
    }).then(function(Customer) {
      res.render("customer", {
        note: "Welcome!",
        customerFN: Customer.firstName,

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
  // app.get("/", function(req, res) {
  //   res.render("index");
  // });

  app.get("/frontdesk", function(req, res) {


    db.ServiceProvider.findAll({
      // where: {
      //   id: req.params.id
      //   }
      include: [db.Availability]
    }).then(function(ServiceProvider) {
      res.render("frontdesk", {
        serviceprovider:ServiceProvider,
        title: ServiceProvider.title,
        firstName: ServiceProvider.firstName,
      });
    });





    // res.render("frontdesk");

    //for each create HTML card and append picture, name on it
    //for each service providor, append html of availability
  });
};//end of the module.exports