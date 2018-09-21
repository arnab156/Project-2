'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      },
      service: {
        type: Sequelize.STRING
      },
      selectedServiceProvider: {
        type: DataTypes.STRING
      },
      dateTime: {
        type: DataTypes.DATE
      },
      msg: {
        type: DataTypes.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Appointments');
  }
};