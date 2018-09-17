'use strict';

module.exports = function (sequelize, DataTypes) {
    var AppointmentSchema = sequelize.define("AppointmentSchema", {
        name: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        notification: DataTypes.INTEGER,
        timeZone: DataTypes.STRING,
        time: { type: DataTypes.DATE, index: true }
    });
    return AppointmentSchema;
};
