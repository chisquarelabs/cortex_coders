const { Client } = require("pg");

const db = new Client({
    host: "rubixcube-rds.chwmo8ksmmlm.eu-west-2.rds.amazonaws.com",
    port: 5432,
    user: "postgres",
    password: "TcsvC8wPtcePyy0ke32t",
    database: "cortex",
  });
  
  db.connect();
console.log('lll')
const adminEmail = "admin@gmail.com";
const adminPassword = "123";

  const Login = (req, res) => {
    try {
        console.log('ooo')
    console.log('req---',req.body)
    if (req.body.email === adminEmail && req.body.password === adminPassword) {
      res.status(200).send({
        message: "Admin logged in successfully",
        success: true,
      });
    } else {
      res
        .status(500)
        .send({ message: "Username or password is incorrect", success: false });
    }
}catch(err){
    console.log('errr---',err.message)
}
  };

  const Register = (req, res) => {
    console.log('req---',req.body)
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
    Register
  };