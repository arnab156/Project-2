'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    customerId: DataTypes.INTEGER,
    serviceProviderId: DataTypes.INTEGER,
    service: DataTypes.STRING,
    dateTime: DataTypes.DATE,
    price: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  Appointment.associate = function(models) {
    // associations can be defined here
  };
  return Appointment;
};