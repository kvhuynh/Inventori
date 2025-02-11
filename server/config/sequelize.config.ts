import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user.model"
import { Todo } from "../models/todo.model";
import { InventoryItem } from "../models/inventory/inventory_item.model";
import { InventoryTab } from "../models/inventory/inventory_tabs.model";
const config = require("../config/mysql.config.json");

const sequelize = new Sequelize(config.database, config.password, config.user, {
	dialect: "mysql",
	host: config.host,
	define: {
		timestamps: false,
	},

	logging: false,
});

sequelize.addModels([User, Todo, InventoryItem, InventoryTab])

module.exports = sequelize;
