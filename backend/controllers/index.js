const { Client } = require("pg");
const Sequelize = require("sequelize");
const db = require("../models");
const Users = require("../models").users;
const PatientAccessment = require("../models").PatientAccessment;

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

const Register = async (req, res) => {
  try {
    console.log("req.body---", req.body);
    await Users.create({
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      dob: req.body.dob,
      gender: req.body.gender,
      ethinicity: req.body.ethinicity,
      role_id: req.body.role_id,
    });

    res
      .status(200)
      .send({ message: "User created successfully", success: true });
  } catch (err) {
    console.log("errr---", err);
    res.status(500).send({ message: "User not created", success: false });
  }
};

const Assessment = async (req, res) => {
    let score;
  try {
    const { patient_id, assessments } = req.body;

    for (const sec of assessments) {
        //If Ans: NO
        if(sec.answer_id === 0)
            score=-1;
        //If Ans: Yes
        if(sec.answer_id !== 0)
            score=+1;
        // Create the Section record for each answer with associated patient_id and question_id
        await PatientAccessment.create({
          patient_id,
          question_id: sec.question_id,
          answer: sec.answer_id,
          score,
        });
      }

    res.status(200).send({
      message: "Accessment submitted successfully",
      success: true,
    });
  } catch (err) {
    console.log("errr---", err);
    res.status(500).send({ message: "User not created", success: false });
  }
};

const Summery = async (req, res) => {
  try {
    const { patient_id, assessments } = req.body;

    for (const sec of assessments) {
        //If Ans: NO
        if(sec.answer_id === 0)
            score=-1;
        //If Ans: Yes
        if(sec.answer_id !== 0)
            score=+1;
        // Create the Section record for each answer with associated patient_id and question_id
        await PatientAccessment.create({
          patient_id,
          question_id: sec.question_id,
          answer: sec.answer_id,
          score,
        });
      }

    res.status(200).send({
      message: "Accessment submitted successfully",
      success: true,
    });
  } catch (err) {
    console.log("errr---", err);
    res.status(500).send({ message: "User not created", success: false });
  }
};

module.exports = {
  Login,
  Register,
  Assessment,
  Summery,
};
