//Bright_Kids models

module.exports = function(sequelize, DataTypes) {
    var BrightKids = sequelize.define("Bright", {
      student_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      enrolled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    })

    return BrightKids

  };
  