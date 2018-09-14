var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/customer/:id", function(req, res) {
    
    db.customer.findOne({
      where: {
        customerId: req.params.id
        }
    }).then(function(customer) {
      res.render("customer", {
        note: "Welcome!",
        customerFN: customer.firstName,

      });
    });

    db.appointment.findOne({ 
      where: {
        customerId: req.params.id
        }
    }).then(function(appointment) {
        res.render("customer", {
          msg: "You have the following appointments with us: ",
          service: appointment.service,
          dateTime: appointment.dateTime,
          // serviceprovider name from ID
        });

        db.serviceprovider.findOne({
          where:{
            id : appointment.serviceProviderId
          }
        }).then(function(serviceprovidername){
          res.render("customer", {
            selectedStylist: serviceprovidername.firstName
          });
        });
      });
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
};
