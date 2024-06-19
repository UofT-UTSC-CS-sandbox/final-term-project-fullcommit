const Employee = require("../models/employeeModel");
const mongoose = require("mongoose");

// GET list of full staff
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET one employee
const getEmployee = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such employee" });
  }

  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ error: "No such employee" });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE new employee in db
const createEmployee = async (req, res) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    contactNumber,
    email,
    address,
    emergencyContact,
    role,
    department,
    employeeID,
    officeLocation,
    notes,
  } = req.body;

  try {
    const employee = await Employee.create({
      firstName,
      lastName,
      dateOfBirth,
      contactNumber,
      email,
      address,
      emergencyContact,
      role,
      department,
      employeeID,
      officeLocation,
      notes,
    });
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE employee from db
const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such employee" });
  }

  try {
    const employee = await Employee.findOneAndDelete({ _id: id });
    if (!employee) {
      return res.status(404).json({ error: "No such employee" });
    }
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE employee info
const updateEmployee = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such employee" });
  }

  try {
    const employee = await Employee.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!employee) {
      return res.status(404).json({ error: "No such employee" });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getEmployees,
  getEmployee,
  createEmployee,
  deleteEmployee,
  updateEmployee,
};
