module.exports = function(sequelize, DataTypes) {
	var Users = sequelize.define("Users", {
		id: {
	      type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5, 30]
            }

        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6, 20]
            }

        }
    });

    return Users;
}