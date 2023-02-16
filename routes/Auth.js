const express = require("express");
const { login, signUp,changePassword } = require("../controllers/authController");
const router = express.Router();
const validatePassword = require("../middlewares/isPasswordAvailable")
router.post("/login", login);

router.post("/signup", signUp);
router.put("/changePassword", validatePassword,changePassword)

module.exports = router;