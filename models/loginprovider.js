// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var Provider = sequelize.define("Provider", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  // Creating a custom method for our Provider model. This will check if an unhashed password entered by the Provider can be compared to the hashed password stored in our database
 Provider.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of theUser Model lifecycle
  // In this case, before aUser is created, we will automatically hash their password
 Provider.hook("beforeCreate", function(provider) {
    provider.password = bcrypt.hashSync(provider.password, bcrypt.genSaltSync(10), null);
  });
  
  return Provider;
};
