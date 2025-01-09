const { Client } = require("pg");
const Sequelize = require("sequelize");
const db = require("../models");
// const Users = require("../models").users;
// const PatientAccessment = require("../models").PatientAccessment;
const { users: Users,
  PatientAccessment,
  Question, 
  Answer
} = require("../models")

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
  // console.log('------req.body', req.body);
    let score;
  try {
    const questions = await Question.findAll();
    const answers = await Answer.findAll();

    console.log('-----------questions', questions[0].dataValues);
    // console.log('-----------answers', answers);
  
    const transformedData = {};

    for (const key in req.body) {
        if (req.body.hasOwnProperty(key)) {
          const questionObject = questions.find((item) => item.dataValues.question_text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() === key.replace(/[^a-zA-Z0-9]/g, '').toLowerCase());
    console.log('-----------questionObject', questionObject);

            const questionId = questionObject.dataValues['id']; // Get the question_id from the key (question_text)
            const answerId = answers.find((item) => item.dataValues.question_id === questionId && item.dataValues.answer_text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() === req.body[key].replace(/[^a-zA-Z0-9]/g, '').toLowerCase()); // Get the answer_id from the value (answer_text)

            if (questionId !== undefined && answerId !== undefined) {
                transformedData[questionId] = {answerId};
            }
        }
    }

    console.log('-------------transformedData', transformedData)

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

const AssesmentQuestion = async (req, res) => {
  try {
        const questions= await Answer.findAll(
          {
            include: [
              {
                model: Question,
              },
            ],
          },
        );
        // console.log('--------------questions', questions);

    res.status(200).send({
      message: "Accessment submitted successfully",
      success: true,
    });
  } catch (err) {
    console.log("errr---", err);
    res.status(500).send({ message: "User not created", success: false });
  }
}

module.exports = {
  Login,
  Register,
  Assessment,
  Summery,
  AssesmentQuestion,
};
