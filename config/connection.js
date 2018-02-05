
// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO SEQUELIZE DATABSASE
// *********************************************************************************


var sequelize = new Sequelize("brightKids_DB", "root", "", {
	host: "localhost",
	dialect: "mysql",
	pool: {
	  max: 5,
	  min: 0,
	  idle: 10000
	}
  });



// Export connection

module.exports = sequelize;