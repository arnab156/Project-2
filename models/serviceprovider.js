'use strict';
module.exports = (sequelize, DataTypes) => {
  const ServiceProvider = sequelize.define('ServiceProvider', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    title: DataTypes.STRING,
    address_1: DataTypes.STRING,
    address_2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  ServiceProvider.associate = function(models) {
    // associations can be defined here
    ServiceProvider.hasMany(models.Availability, {
      onDelete: "cascade"
    });
  };
  return ServiceProvider;
};
// exports = module.exports = ServiceProvider;