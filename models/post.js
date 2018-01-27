module.exports = function(sequelize, DataTypes) {
	var Post = sequelize.define("Post", {
		body: {
			type: DataTypes.TEXT,
			allowNull: true,
			len: [1]
		}
	},{
		nowDate: Sequelize.DATE
	});

	Post.associate = function(models) {
		Post.belongsTo(models.Student, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Post;

};