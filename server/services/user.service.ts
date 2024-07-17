export {};

import { User } from "../models/user.model";
const bcrypt = require("bcrypt");

const createUser = async (data: any, res: any) => {
	const user = await User.create(data);

	// !!! add authentication with jwt
	return user;
};

const loginUser = async (data: any, res: any) => {
	const user = await User.findOne({ where: { email: data.email } });
	if (user === null) {
		throw {
			name: "UserNotFoundError",
			message: "Invalid credentials",
		};
	}

	const isPassword = await bcrypt.compare(data.password, user.password);
	if (!isPassword) {
		throw {
            name: "IncorrectPasswordError",
            message: "Invalid credentials"
        };  
	}
};

module.exports = {
	createUser,
	loginUser,
};
