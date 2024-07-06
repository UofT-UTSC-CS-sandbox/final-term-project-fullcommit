const mongoose = require('mongoose');

// create a new schema
const Schema = mongoose.Schema;

// Shift Manager Schema
const ShiftManagerSchema = new Schema({
    // Employee's shifts
    shifts: [{
        date: { type: Date, required: true },
        startTime: { type: Date, required: true },
        endTime: { type: Date, required: true },
        assignedEmployees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }],
    }],

    // Oatients assigned to an employee
    assignedPatients: [{
        patientId: { type: Schema.Types.ObjectId, ref: 'Patient' },
        assignedDoctor: { type: Schema.Types.ObjectId, ref: 'Employee' },
    }]

    // modify or add more later...

}, { timestamps: true });

const ShiftManager = mongoose.model('ShiftManager', ShiftManagerSchema);
module.exports = ShiftManager;
