export {}

import { User } from "../models/user.model";

const createUser = async (data: any, res:any ) => {
    const user = await User.create(data)

    // !!! add authentication with jwt
    return user;
}

const loginUser = async (data: any, res: any) => {
    const user = await User.findOne({where: {email: data.email}});


}

module.exports = {
    createUser
}