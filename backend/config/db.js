// Connect to MongoDB here

// Load environment variables from .env file into process.env
require("dotenv").config()
const mongoose = require('mongoose') // Mongoose for connecting to MongoDB

// CONNECT TO DB
// Connect to MongoDB using the URI stored in environment variables
// TODO: evaluate if try catch/async necessary instead
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Start the server and listen on the port specified in environment variables
        app.listen(process.env.PORT, () => {
            console.log('Successfully connected to database, and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        // Log any errors that occur during connection
        console.log(error)
    })
export default connectDB