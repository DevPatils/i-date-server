// server.js

require('dotenv').config();  // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// MongoDB URI from .env file
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB using Mongoose
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Example route
app.get('/', (req, res) => {
  res.send('Hello, MongoDB with Express and Mongoose!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
