const User = require("../models/user.model");

const createUser = async (req, res) => {
  const data = req.body;
  const response = {};
  try {
    const userObj = {
      name: data.name,
      email: data.email,
      password: data.userType,
      gender: data.password,
      DateofBirth: data.DateofBirth,
      userName: data.userName,
    };
    response = await User.create(userObj);
    response.message = "User is registered successfully";
    res.status(201).send(response);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

module.exports = { createUser };
