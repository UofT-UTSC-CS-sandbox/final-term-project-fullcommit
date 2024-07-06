// Connect to MongoDB here

// Load environment variables from .env file into process.env
require("dotenv").config()
const mongoose = require('mongoose') // Mongoose for connecting to MongoDB

// CONNECT TO DB
// Connect to MongoDB using the URI stored in environment variables
// TODO: evaluate if try catch/async necessary instead
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Successfully connected to database');
    } catch (error) {
        console.error('Failed to connect to database:', error);
        throw error;
    }
};
module.exports = connectDB