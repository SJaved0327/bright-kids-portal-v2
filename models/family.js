module.exports = function(sequelize, DataTypes) {
	var Family = sequelize.define("Family", {
		id: {
	      type: DataTypes.INTEGER,
	      autoIncrement: true,
	      primaryKey: true
	    },
	  family_first: {
	  		type: DataTypes.STRING,
	  		allowNull: false,
	  		validate: {
	  			len: [1, 30]
	  		}
	  	},
	  family_last: {
	  		type: DataTypes.STRING,
	  		allowNull: false,
	  		validate: {
	  			len: [1, 30]
	  		}
	  	},
	  family_email: {
	  		type: DataTypes.STRING,
	  		allowNull: false,
	  		validate: {
	  			len: [5, 30]
	  		}
	  	},
	  family_pw: {
	  		type: DataTypes.STRING,
	  		allowNull: false,
	  		validate: {
	  			len: [8, 8]
	  		}
	  	},
	  active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
	  	},
	  parent2_first: {
	  	type: DataTypes.STRING,
	  		allowNull: true,
	  		validate: {
	  			len: [1, 30]
	  		}
	  	},
	  parent2_last: {
	  	type: DataTypes.STRING,
	  		allowNull: true,
	  		validate: {
	  			len: [1, 30]
	  		}
	  	},
	  parent2_email: {
	  		type: DataTypes.STRING,
	  		allowNull: true,
	  		validate: {
	  			len: [5, 30]
	  		}
	  	}
	});
	//associate Family with Students
	Family.associate = function(models) {
		Family.hasMany(models.Student, {
			//when Family is deleted, all affiliated Students will be deleted
			onDelete: "cascade"
		});
	};

	return Family;
};