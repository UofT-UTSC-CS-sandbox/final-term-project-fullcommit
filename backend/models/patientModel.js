const mongoose = require("mongoose");

// Create a new schema
const Schema = mongoose.Schema;

// SCHEMA
const patientSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
    },
    contactNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      street: String,
      city: String,
      province: String,
      zip: String,
    },
    emergencyContact: {
      name: String,
      relationship: String,
      phone: String,
    },
    currentMedications: [String],
    allergies: [String],
    insuranceProvider: {
      type: String,
      required: true,
    },
    insuranceNumber: {
      type: String,
      required: true,
      unique: true,
    },
    // New fields
    profilePic: {
      type: String,
      required: false,
    },
    priority: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    previousDoctor: {
      type: String,
      required: false,
    },
    notes: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);

// MODEL
module.exports = mongoose.model("Patient", patientSchema);
