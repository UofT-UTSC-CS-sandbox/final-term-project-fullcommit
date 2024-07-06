const mongoose = require('mongoose');

// create a new schema
const Schema = mongoose.Schema;

// Equipment Tracker Schema
const EquipmentTrackerSchema = new Schema({

    // Equipment details
    equipmentName: { type: String, required: true },
    building: {type: String, required: true },
    available: { type: Boolean, default: true },
    status: { type: String, enum: ['Available', 'In Use', 'Maintenance', 'Repair'] },
    equipmentNumber: { type: String, required: true, unique: true },
    manufacturer: String,
    model: String,

    // Assignment
    assignedEmployee: { type: Schema.Types.ObjectId, ref: 'Employee' },  // Reference to Employee that currently has it
    assignedPatient: { type: Schema.Types.ObjectId, ref: 'Patient' },  // Reference to Patient if patient is using it
}, { timestamps: true });

const EquipmentTracker = mongoose.model('EquipmentTracker', EquipmentTrackerSchema);
module.exports = EquipmentTracker;
