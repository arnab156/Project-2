var db = require("../models");
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/availability", function(req, res) {
    var query = {};
    if (req.query.serviceProvider_id) {
      query.ServiceProviderId = req.query.serviceProvider_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Availability.findAll({
      where: query,
      include: [db.ServiceProvider]
    }).then(function(dbAvail) {
      res.json(dbAvail);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/availability/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Availability.findOne({
      where: {
        id: req.params.id
      },
      include: [db.ServiceProvider]
    }).then(function(dbAvailability) {
      res.json(dbAvailability);
    });
  });

  // POST route for saving a new post
  app.post("/api/availability", function(req, res) {
    db.Availability.create(req.body).then(function(dbAvailability) {
      res.json(dbAvailability);
    });
  });

  // DELETE route for deleting Availabilitys
  app.delete("/api/availability/:id", function(req, res) {
    db.Availability.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAvailability) {
      res.json(dbAvailability);
    });
  });

  // PUT route for updating Availabilitys
  app.put("/api/availability", function(req, res) {
    db.Availability.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbAvail) {
      res.json(dbAvail);
    });
  });
};
