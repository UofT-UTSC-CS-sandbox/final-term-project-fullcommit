// IMPORTS
const express = require('express')

// import controller functions from patientController file
const {
    getEmployees,
    getEmployee,
    createEmployee,
    deleteEmployee,
    updateEmployee
} = require('../controllers/employeeController') 

// CREATE A ROUTER
const router = express.Router() // instance of the router

// ADD DIFFERENT REQEST HANDLERS ON TO THE ROUTER

// GET all employees
router.get('/', getEmployees) 

// GET one employee
router.get('/:id', getEmployee) 

// POST a new employee
router.post('/', createEmployee)

// DELETE an employee
router.delete('/:id', deleteEmployee)

// PATCH a employee
router.patch('/:id', updateEmployee)

// EXPORT ROUTER
module.exports = router 