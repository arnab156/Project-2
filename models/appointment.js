'use strict';
module.exports = (sequelize, DataTypes) => {
  const appointment = sequelize.define('appointment', {
    customerId: DataTypes.INTEGER,
    serviceProviderId: DataTypes.INTEGER,
    service: DataTypes.STRING,
    dateTime: DataTypes.DATE,
    price: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  appointment.associate = function(models) {
    // associations can be defined here
  };
  return appointment;
};