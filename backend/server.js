// Load environment variables from .env file into process.env
require("dotenv").config();

// IMPORTS
const express = require("express"); // Express framework for creating the server
const mongoose = require("mongoose"); // Mongoose for connecting to MongoDB
const path = require("path"); // Path module for handling file paths
const patientRoutes = require("./routes/patients"); // patient routes
const employeeRoutes = require("./routes/employees"); // employee routes
const medicineRoutes = require("./routes/medicine"); // medicine routes

// Create an Express app
const app = express();

// to parse incoming JSON requests (If request has a body, attach it to request object)
app.use(express.json());

// to log the request path and method for every request
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next(); // Move on to the next middleware or route handler
});

// ROUTES
app.use("/api/patients", patientRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/medicine", medicineRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Handle any other routes with the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

// CONNECT TO DB
// Connect to MongoDB using the URI stored in environment variables
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Start the server and listen on the port specified in environment variables
    app.listen(process.env.PORT, () => {
      console.log(
        "Successfully connected to database, and listening on port",
        process.env.PORT,
      );
    });
  })
  .catch((error) => {
    // Log any errors that occur during connection
    console.log(error);
  });
