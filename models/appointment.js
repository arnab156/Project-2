'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    firstName:DataTypes.STRING,
    number:DataTypes.STRING,
    selectedServiceProvider: DataTypes.STRING,
    dateTime: DataTypes.DATE,
    msg: DataTypes.STRING

  }, {});
  Appointment.associate = function(models) {
    // associations can be defined here
  };
  return Appointment;
};
// exports = module.exports = Appointment;