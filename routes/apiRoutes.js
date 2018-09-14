var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/serviceprovider", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/customer", function(req, res) {
    db.customer.create(req.body).then(function(testdb) {
      res.json(testdb);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });



  app.post("/api/customer", function(req, res) {
    console.log(req.body);
    db.customer.create(req.body).then(function(testdb) {
      res.json(testdb);
    });
  });

};
