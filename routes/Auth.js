const express = require("express");
const { login, signUp,changePassword } = require("../controllers/authController");
const router = express.Router();

router.post("/login", login);

router.post("/signup", signUp);
router.put("/changePassword",changePassword)

module.exports = router;