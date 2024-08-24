const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const BuyersModel = require('./models/Buyers');

const app = express();

// Apply CORS globally
app.use(cors({
  origin: "https://foodorder-frontend-j5bylr321-abdurrehman-s-projects.vercel.app", // Replace with your actual frontend URL
  methods: ["POST", "GET", "OPTIONS"], // Allow OPTIONS method for preflight requests
  allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers if necessary
  credentials: true, // Allow credentials (e.g., cookies)
  preflightContinue: false, // False to automatically handle OPTIONS responses
  optionsSuccessStatus: 204 // Some legacy browsers (IE11, various SmartTVs) choke on 204
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Handle OPTIONS requests globally
app.options('*', cors());

// Connect to MongoDB
mongoose.connect("mongodb+srv://battlemani790:swistan%4012@buyers.vg5z41x.mongodb.net/Buyers")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Root route for testing
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Login route
app.post('/login', (req, res) => {
  const { Email, Password } = req.body;

  BuyersModel.findOne({ Email: Email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ message: 'No User Found' });
      }
      if (user.Password === Password) {
        return res.status(200).json({ message: 'Login Successful', user: user });
      } else {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
    })
    .catch(error => {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    });
});

// Signup route
app.post('/signup', (req, res) => {
  BuyersModel.create(req.body)
    .then(buyers => {
      console.log('Data stored:', buyers);
      res.status(201).json(buyers); // Use 201 for created resources
    })
    .catch(error => {
      console.error('Error storing data:', error);
      res.status(500).json({ error: 'Failed to store data' });
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
