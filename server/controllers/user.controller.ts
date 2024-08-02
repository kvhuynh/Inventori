const { createUser, loginUser } = require("../services/user.service");

const handleCreateUser = async (req: any, res: any) => {
	try {
		const user = await createUser(req.body, res);
		return res.json(user);
	} catch (error: any) {
		console.log(error);
		res.statusMessage = "Current password does not match";
		return res.status(400).end();
		// throw new Error("invalid credentials")
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
