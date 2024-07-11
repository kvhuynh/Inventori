export {}

const {
    createUser
} = require("../services/user.service");

const handleCreateUser = async (req: any, res: any) => {
    try {
        const user = await createUser (req.body, res);
        return res.json(user);
    } catch (error: any) {
        return res.status(400).json(error);
    }
}

module.exports = {
    handleCreateUser
}