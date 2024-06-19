const Patient = require("../models/patientModel");
const mongoose = require("mongoose");

// GET all patients
const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find({});
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET one patient
const getPatient = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Patient does not exist" });
  }
  try {
    const patient = await Patient.findById(id);
    if (!patient) {
      return res.status(404).json({ error: "Patient does not exist" });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE new patient
const createPatient = async (req, res) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    gender,
    contactNumber,
    email,
    address,
    emergencyContact,
    currentMedications,
    allergies,
    insuranceProvider,
    insuranceNumber,
    profilePic,
    priority,
    category,
    previousDoctor,
    notes,
  } = req.body;
  try {
    const patient = await Patient.create({
      firstName,
      lastName,
      dateOfBirth,
      gender,
      contactNumber,
      email,
      address,
      emergencyContact,
      currentMedications,
      allergies,
      insuranceProvider,
      insuranceNumber,
      profilePic,
      priority,
      category,
      previousDoctor,
      notes,
    });
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE patient
const deletePatient = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Patient does not exist" });
  }
  try {
    const patient = await Patient.findOneAndDelete({ _id: id });
    if (!patient) {
      return res.status(404).json({ error: "Patient does not exist" });
    }
    res.status(200).json({ message: "Patient deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE patient
const updatePatient = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Patient does not exist" });
  }
  try {
    const patient = await Patient.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!patient) {
      return res.status(404).json({ error: "Patient does not exist" });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPatients,
  getPatient,
  createPatient,
  deletePatient,
  updatePatient,
};
