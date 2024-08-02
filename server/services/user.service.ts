export {};

import { User } from "../models/user.model";
require('dotenv').config()
const secret = process.env.SECRET_KEY
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");


const createUser = async (data: any, res: any) => {
	console.log(secret);
	
	const user = await User.create(data)
	.then((user: User) => {
		const userToken = jwt.sign(
			{
				id: user.id, 
			},
			process.env.SECRET_KEY
		);

		res
			.cookie("usertoken", userToken, secret, {	
				httpOnly: true,
			})
			.json({ msg: "success!" });
	})
		.catch((err) => {
			console.log(err);
			throw new Error("Invalid credentials")
			
		});
	// console.log(data);

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
			message: "Invalid credentials",
		};
		console.log("wrong credentials");
	}

	console.log("logged in");
};

module.exports = {
	createUser,
	loginUser,
};
