'use strict';

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address_1: DataTypes.STRING,
    address_2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    credit_card: DataTypes.STRING,
    expiration: DataTypes.STRING,
    cvc: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
  };

  Customer.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of theCustomer Model lifecycle
  // In this case, before aCustomer is created, we will automatically hash their password
 Customer.hook("beforeCreate", function(user) {
    customer.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return Customer;
};
// exports = module.exports = customer;