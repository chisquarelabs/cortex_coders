const express = require('express');
const router = express.Router();
const { Login } = require('../controllers');
// Define the /api/login route
// router.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   // Example validation (replace with your actual logic)
//   if (email === 'user@example.com' && password === 'password') {
//     return res.status(200).json({ message: 'Login successful!' });
//   }

//   return res.status(401).json({ message: 'Invalid credentials!' });
// });
router.post('/login', Login);

module.exports = router;