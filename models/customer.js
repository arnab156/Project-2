'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address_1: DataTypes.STRING,
    address_2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    credit_card: DataTypes.INTEGER,
    expiration: DataTypes.STRING,
    cvc: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  customer.associate = function(models) {
    // associations can be defined here
  };
  return customer;
};