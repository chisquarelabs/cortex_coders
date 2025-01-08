const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const indexRouter = require('./router/index'); // Import login router

// Middleware to parse JSON
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Use the router for /api routes
app.use('/api', indexRouter);

// Default route to handle unmatched requests
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:8000`);
});
