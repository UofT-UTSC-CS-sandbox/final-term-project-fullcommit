const mongoose = require('mongoose')

// create a new schema
const Schema = mongoose.Schema

// SCHEMA
const patientSchema = new Schema({
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
        enum: ['Male', 'Female', 'Other'],
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
    currentMedications: [String], // current medications patient is taking
    allergies: [String],
    insuranceProvider: {
        type: String,
        required: true,
    },
    insuranceNumber: {
        type: String,
        required: true,
        unique: true,
    }
}, {timestamps: true}) // timestamp automatically adds when document was created

// MODEL
module.exports = mongoose.model('Patient', patientSchema) 