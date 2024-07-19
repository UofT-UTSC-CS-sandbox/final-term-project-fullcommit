const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    dateOfAppointment: { type: Date, required: true },
    outcome: { type: String, required: true },
    diagnosis: { type: String },
    files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }],
    notes: [{ type: String }],
    comments: [{ type: String }]
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
