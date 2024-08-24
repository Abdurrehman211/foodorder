const mongoose = require("mongoose");

// Define the schema
const buyersSchema = new mongoose.Schema({
    Firstname: String,
    Lastname: String,
    Email: String,
    Password: String
}, { collection: 'Register' }); // Set the collection name

// Create the model
const BuyersModel = mongoose.model("Buyers", buyersSchema);

module.exports = BuyersModel;
