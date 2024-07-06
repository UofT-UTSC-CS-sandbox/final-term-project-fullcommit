const mongoose = require('mongoose')
const User = require('./userModel');
const Employee = require('./employeeModel') // import Employee model

// create a new schema
const Schema = mongoose.Schema

// SCHEMA
const patientSchema = new Schema({
    assignedPhysician: [{type: Schema.Types.ObjectId, ref:'Employee'}],
    currentMedications: [String], 
    allergies: [String],
}, {timestamps: true}) // timestamp automatically adds when document was created

// MODEL
//module.exports = mongoose.model('Patient', patientSchema) 
// TODO: Fix exports and imports
// TODO: discuss class inheritance
const Patient = User.discriminator('Patient', patientSchema);
module.exports = Patient;