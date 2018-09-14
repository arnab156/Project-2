var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var db = require("../models");  

  passport.serializeUser(function(user, done) {
    done(null, db.customer.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });


function validPassword(password) {
    
}

passport.use(new LocalStrategy(
  function(username, password, done) {
    db.customer.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));


