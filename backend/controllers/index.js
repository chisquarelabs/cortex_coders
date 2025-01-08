const { Client } = require("pg");
const Sequelize = require("sequelize");
const db = require("../models");
const Users = require("../models").users;

const Login = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: { email: req.body.email, password: req.body.password },
      attributes: ["id"],
    });
    console.log("user---", user);
    if (user) {
      res.status(200).send({
        message: "Admin logged in successfully",
        success: true,
      });
    } else {
      res
        .status(500)
        .send({ message: "Username or password is incorrect", success: false });
    }
  } catch (err) {
    console.log("errr---", err);
  }
};

const Register = (req, res) => {
  console.log("req---", req.body);
  // if (req.body.email === adminEmail && req.body.password === adminPassword) {
  //   res.status(200).send({
  //     message: "Admin register in successfully",
  //     success: true,
  //   });
  // } else {
  //   res
  //     .status(500)
  //     .send({ message: "Username or password is incorrect", success: false });
  // }
};

module.exports = {
  Login,
  Register,
};
