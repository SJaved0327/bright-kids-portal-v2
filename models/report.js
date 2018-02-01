module.exports = function(sequelize, DataTypes) {
	var Report = sequelize.define("Report", {
		session_observations: {
			type: DataTypes. TEXT,
			allowNull: false,
			len: [1]
		},
		materials_evaluation: {
			type: DataTypes. TEXT,
			allowNull: false,
			len: [1]
		},
		comments_for_bk: {
			type: DataTypes. TEXT,
			allowNull: true,
			len: [1]
	},
		nowDate: DataTypes.DATE
	})

	Report.associate = function(models) {
		Report.belongsTo(models.Student, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Report;

};