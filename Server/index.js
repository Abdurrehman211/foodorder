const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const BuyersModel = require('./models/Buyers');

const app = express();
app.use(express.json());
app.use(cors({
  origin: ["https://foodorder-frontend.vercel.app"],  // Update with your frontend URL
  methods: ["POST", "GET"],
  credentials: true
}));

mongoose.connect("mongodb+srv://battlemani790:swistan%4012@buyers.vg5z41x.mongodb.net/Buyers")
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

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

app.post("/signup", (req, res) => {
  BuyersModel.create(req.body)
    .then(buyers => {
      console.log('Data stored:', buyers);
      res.json(buyers);
    })
    .catch(error => {
      console.error('Error storing data:', error);
      res.status(500).json({ error: 'Failed to store data' });
    });
});

module.exports = app;
