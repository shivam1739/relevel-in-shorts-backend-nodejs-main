//import user model here
const User = require("../models/user.model");

const register = async (req, res) => {
  //register api logic here
  console.log(req.body);
  const response = {};
  try {
    const userObj = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      gender: req.body.gender,
      role: req.body.role,
      DateofBirth: req.body.DateofBirth,
      userName: req.body.userName,
    };
    response.data = await User.create(userObj);
    response.message = "User is registered successfully";
    res.status(201).send(response);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

const login = (req, res) => {
  //login api logic here
};

const AuthController = {
  register,
  login,
};

module.exports = AuthController;
