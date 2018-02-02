module.exports = function(sequelize, DataTypes) {
	var Assessment = sequelize.define("Assessment", {
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

	Assessment.associate = function(models) {
		Assessment.belongsTo(models.Student, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Assessment;
}
