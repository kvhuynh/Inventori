import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user.model"
const config = require("../config/mysql.config.json");

const sequelize = new Sequelize(config.database, config.password, config.user, {
	dialect: "mysql",
	host: config.host,
	define: {
		timestamps: false,
	},

	logging: false,
});

sequelize.addModels([User])

module.exports = sequelize;
