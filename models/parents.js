//Parent model
module.exports = function(sequelize, DataTypes) {
    const Parent = sequelize.define("Parent", {
      parent: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Parent;
  };