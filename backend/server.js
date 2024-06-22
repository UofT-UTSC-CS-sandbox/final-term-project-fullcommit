// IMPORTS 
const express = require('express') // Express framework for creating the server
const connectDB = require('./config/db.js') // Setup MongoDB

const patientRoutes = require('./routes/patients') // patient routes 
const employeeRoutes = require('./routes/employees') // employee routes
const medicineRoutes = require('./routes/medicine') // medicine routes


// Create an Express app
const app = express()
connectDB()

// to parse incoming JSON requests (If request has a body, attach it to request object)
app.use(express.json())

// to log the request path and method for every request
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next() // Move on to the next middleware or route handler
})

// ROUTES
app.use('/api/patients', patientRoutes)
app.use('/api/employees', employeeRoutes)
app.use('/api/medicine', medicineRoutes)
