export {};

const { createUser, loginUser } = require("../services/user.service");

const handleCreateUser = async (req: any, res: any) => {
	try {
		const user = await createUser(req.body, res);
		return res.json(user);
	} catch (error: any) {
		return res.status(400).json(error);
	}
};

const handleLoginUser = async (req: any, res: any) => {
	try {
		const user = await loginUser(req.body, res);
	} catch (error: any) {
		return res.status(400).json(error);
	}
};

module.exports = {
	handleCreateUser,
    handleLoginUser
};
