const mongoose = require('mongoose')
import Employee from './employeeModel';

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
    assignedPhysician: [{type: Schema.Types.ObjectId, ref:'Employee'}],
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
//module.exports = mongoose.model('Patient', patientSchema) 
// TODO: Fix exports and imports
// TODO: discuss class inheritance
module.exports = patientSchema.discriminator('patientUser', Emplyoee);