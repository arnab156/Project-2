var db = require("../models");
var passport = require("passport");

module.exports = function(app) {

// Login start
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/customerComplete/:id");
  });


  // app.post('/login',passport.authenticate('local', { successRedirect: '/',
  //                                                   failureRedirect: '/login',
  //                                                   failureFlash: true })
  // );

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
      // res.redirect(307, "/api/customerComplete");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });



  // Route for logging user out
  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });



// Login end



app.get("/api/serviceproviders/", function(req, res) {
  console.log('WE HHIT OUR ROUTE!!!!!!')
  db.ServiceProvider.findAll({}).then(function(data){
  console.log('this is our stufff', data);
    res.json(data);
  })
});




  // Create new service provider
  app.post("/api/serviceproviders", function(req, res) {
    db.ServiceProvider.create(req.body).then(function(createdServiceProvider) {
      res.json(createdServiceProvider);
    });
  });
  // Get all service providers
  app.get("/api/serviceproviders", function(req, res) {
    db.ServiceProvider.findAll({}).then(function(serviceProviders) {
      res.json(serviceProviders);
    });
  });
// Delete an existing service provider
  app.delete("/api/serviceproviders/:id", function(req, res) {
    db.ServiceProvider.destroy({ where: { id: req.params.id } }).then(function(deletedServiceProvider) {
      res.json(deletedServiceProvider);
    });
  });


  // Create a new customer
  app.post("/api/customers/", function(req, res) {
    db.Customer.create(req.body).then(function(createdCustomer) {
      res.json(createdCustomer);
    });
  });
  // Get all customers
  app.get("/api/customers", function(req, res) {
    db.Customer.findAll({}).then(function(allCustomers) {
      res.json(allCustomers);
    });
  });
  // Delete an existing customer
  app.delete("/api/customer/:id", function(req, res) {
    db.Customer.destroy({ where: { id: req.params.id } }).then(function(deletedCustomer) {
      res.json(deletedCustomer);
    });
  });

  // Create a new appointment
  app.post("/api/appointments/", function(req, res) {
    db.Appointment.create(req.body).then(function(createdAppointment) {
      res.json(createdAppointment);
    });
  });
  // Get all appointments 
  app.get("/api/appointments", function(req, res) {
    db.Appointment.findAll({}).then(function(allAppointments) {
      res.json(allAppointments);
    });
  });
  // Delete an existing appointment
  app.delete("/api/appointments/:id", function(req, res) {
    db.Appointment.destroy({ where: { id: req.params.id } }).then(function(deletedAppointment) {
      res.json(deletedAppointment);
    });
  });


  // app.post("/api/customerlogin", passport.authenticate('local'),function(req,res){
  //    // console.log (req.user);
  //    if(req.user) {
  //      //valid
  //      res.json()
  //    } else { // invalid }
  //   }
  // });

  // Delete an example by id
  app.delete("/api/serviceprovider/:id", function(req, res) {
    db.ServiceProvider.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSP) {
      res.json(dbSP);
    });
  });

};
