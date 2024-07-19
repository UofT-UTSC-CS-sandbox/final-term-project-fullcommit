const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    fileUrl: { type: String, required: true },
    appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }
});

const File = mongoose.model('File', fileSchema);
module.exports = File;
