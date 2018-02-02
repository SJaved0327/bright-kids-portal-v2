module.exports = function(sequelize, DataTypes) {

	var Student = sequelize.define("Student", {
		id: {
	      type: DataTypes.INTEGER,
	      autoIncrement: true,
	      primaryKey: true
	    },
	  student_first: {
	  		type: DataTypes.STRING,
	  		allowNull: false,
	  		validate: {
	  			len: [1, 30]
	  		}
	  	},
	  student_last: {
	  		type: DataTypes.STRING,
	  		allowNull: false,
	  		validate: {
	  			len: [1, 300]
	  		}
	  	},
	  current_grade: {
	  		type: DataTypes.STRING,
	  		allowNull: false,
	  		validate: {
	  			len: [1, 5]
	  		}
	  	},
	  grade_of_entry: {
	  		type: DataTypes.STRING,
	  		allowNull: false,
	  		validate: {
	  			len: [1, 5]
	  		}
	  	},
	  dob: {
	  		type: DataTypes.STRING,
	  		allowNull: false,
	  		validate: {
	  			len: [10, 10]
	  		}
	  	},
	  gender: {
	  		type: DataTypes.STRING,
	  		allowNull: false,
	  		validate: {
	  			len: [1, 2]
	  		}
	  	},
	  handed: {
	  		type: DataTypes.STRING,
	  		allowNull: true,
	  		validate: {
	  			len: [1, 5]
	  		}
	  	},
	  account_manager: {
	  		type: DataTypes.STRING,
	  		allowNull: true,
	  		validate: {
	  			len: [1, 30]
	  		}
	  	},
	  active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
	  	},
	  address: {
      type: DataTypes.TEXT,
      allowNull: true,
      len: [1, 100]
    	}
	},{
	  nowDate: DataTypes.DATE
	},{
		tableName: "students"
	});

	//Student must belong to a family
	Student.associate = function(models) {
		Student.belongsTo(models.Family, {
      foreignKey: {
      	//student cannot be created without a family
        allowNull: false
      }
    });
	};
	//POST
	Student.associate = function(models) {
		Student.hasMany(models.Post, {
			onDelete: "cascade"
		});
	}
	//REPORT
	Student.associate = function(models) {
		console.log(models)
		Student.hasMany(models.Report, {
			onDelete: "cascade"
		});
	}
	//ASSESSMENT
	Student.associate = function(models) {
		Student.hasMany(models.Assessment, {
			onDelete: "cascade"
		});
	}

	return Student;
};