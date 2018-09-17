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
    expiration: DataTypes.INTEGER,
    cvc: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};