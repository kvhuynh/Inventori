export {}
const {
    handleCreateUser,
    handleLoginUser,
    // handleGetCurrentUser,
    // handleLogoutUser
    
} = require("../controllers/user.controller");


const express = require("express");

const router = express.Router();

router.post("/register", handleCreateUser)
router.post("/login", handleLoginUser)
// router.get("/", handleGetCurrentUser);
// router.get("/logout", handleLogoutUser);

module.exports = { userRouter: router };