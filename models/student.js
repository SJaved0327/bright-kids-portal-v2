module.exports = function(sequelize, DataTypes) {
	var Student = sequelize.define("Student", {
		id: {
	      type: Sequelize.INTEGER,
	      autoIncrement: true,
	      primaryKey: true
	    },
	  student_first: {
	  		
	  	},
	  student_last: {

	  	},
	  current_grade: {

	  	},
	  grade_of_entry: {

	  	},
	  dob: {

	  	},
	  gender: {

	  	},
	  handed: {

	  	},
	  account_manager: {

	  	},
	  active: {

	  	},

	},{
	  nowDate: Sequelize.DATE
	})

	//Student must belong to a family
	Student.associate = function(models) {
		Student.belongsTo(models.Family, {
      foreignKey: {
      	//student cannot be created without a family
        allowNull: false
      }
    });
	};

	return Student;
};