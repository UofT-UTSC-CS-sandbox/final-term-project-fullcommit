const express = require("express");
const {
  getEmployees,
  getEmployee,
  createEmployee,
  deleteEmployee,
  updateEmployee,
} = require("../controllers/employeeController");

const router = express.Router();

// Get all employees
// @route GET /employees
// @desc Retrieves a list of all employees
// @access Public
router.get("/", getEmployees);

// Get a single employee by ID
// @route GET /employees/:id
// @desc Retrieves the details of a specific employee by ID
// @access Public
router.get("/:id", getEmployee);

// Create a new employee
// @route POST /employees
// @desc Adds a new employee to the database
// @access Public
router.post("/", createEmployee);

// Delete an employee by ID
// @route DELETE /employees/:id
// @desc Deletes a specific employee by ID
// @access Public
router.delete("/:id", deleteEmployee);

// Update an employee by ID
// @route PATCH /employees/:id
// @desc Updates the details of a specific employee by ID
// @access Public
router.patch("/:id", updateEmployee);

module.exports = router;
