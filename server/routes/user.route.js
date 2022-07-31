const express = require('express');
const userController = require('../controller/user.controller')
const router = express.Router();
const authMiddleWare = require("../middleware/authMiddleware")

router.post("/signup",userController.signUp)
router.post("/login",userController.login)
router.post("/getuserinfo",authMiddleWare,userController.getUserInfo)
module.exports = router;
