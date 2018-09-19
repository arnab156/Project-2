module.exports = function(sequelize, DataTypes) {
    var Availability = sequelize.define("Availability", {

      time: {
        type: DataTypes.STRING,
        allowNull: false
      },
      booked:{
          type:DataTypes.BOOLEAN,
          allowNull:false
      }
    });
  
    Availability.associate = function(models) {
      // We're saying that a Availability should belong to an Author
      // A Availability can't be created without an Author due to the foreign key constraint
      Availability.belongsTo(models.ServiceProvider, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Availability;
  };
  