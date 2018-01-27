module.exports = function(sequelize, DataTypes) {
	var Family = sequelize.define("Family", {
		
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