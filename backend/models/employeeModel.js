const mongoose = require('mongoose');

// create a new schema
const Schema = mongoose.Schema;

// SCHEMA
const employeeSchema = new Schema({
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
    role: {
        type: String,
        required: true,
        enum: ['Doctor', 'Nurse', 'Technician', 'Administrative', 'Custodian'],
    },
    department: {
        type: String,
        required: true,
    },
    employeeID: {
        type: String,
        required: true,
        unique: true,
    }
}, {timestamps: true}); // timestamp automatically adds when document was created

// MODEL
module.exports = mongoose.model('Employee', employeeSchema);