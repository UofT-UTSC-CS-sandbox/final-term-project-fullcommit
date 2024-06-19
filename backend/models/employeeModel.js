const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
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
    role: {
      type: String,
      required: true,
      enum: ["Doctor", "Nurse", "Technician", "Administrative", "Custodian"],
    },
    department: { type: String, required: true },
    employeeID: { type: String, required: true, unique: true },
    officeLocation: { type: String, required: true },
    notes: { type: String, required: false },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Employee", employeeSchema);
