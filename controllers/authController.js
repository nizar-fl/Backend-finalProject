const bcrypt = require("bcrypt");
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");


const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const findUser = await User.findOne({ email })
    if (!findUser) {
      return res.status(400).json({ msg: "User does not exist" })
    }
    const correctPassword = await bcrypt.compare(password, findUser.password);
    if (!correctPassword) {
      return res.status(400).json({ msg: "bad credentials" })
    }
    const token = jwt.sign({ id: findUser._id }, process.env.SECRETTOKEN, {
      expiresIn: "2d",
    })
    res.status(200).json({ msg: "Login successful", token: token });



  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }


};

const signUp = async (req, res) => {
  const { email, password } = req.body;
  try {
    const findUser = await User.findOne({ email })
    if (findUser) {
      return res.status(400).json({ msg: "This email is already assigned to an account" })
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ ...req.body, password: hashedPassword });
    newUser.save((err) => {
      if (err) {
        return res.status(500).json({ msg: "Something went wrong or some informations are missing" });
      }
      res.status(201).json({ msg: "User created successfully" });
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }


};

module.exports = {
  login,
  signUp,
};