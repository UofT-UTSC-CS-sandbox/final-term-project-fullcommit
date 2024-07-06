const mongoose = require('mongoose');
const User = require('./userModel');

// create a new schema
const Schema = mongoose.Schema;

// SCHEMA
const employeeSchema = new Schema({
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
const Employee = User.discriminator('Employee', employeeSchema);
module.exports = Employee;