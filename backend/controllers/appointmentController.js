const Appointment = require('../models/appointment');
const File = require('../models/file');
const multer = require('multer');
const path = require('path');

// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the upload directory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Set the file name
    }
});
const upload = multer({ storage: storage }).array('files');

/**
 * Log a new appointment
 * @route POST /logAppointment
 * @desc Logs a new appointment with the provided details and handles file uploads
 * @access Public
 * @param {String} patientName - Name of the patient
 * @param {Date} dateOfAppointment - Date of the appointment
 * @param {String} outcome - Outcome of the appointment
 * @param {String} diagnosis - Diagnosis details
 */
exports.logAppointment = (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.error('File upload error:', err);
            return res.status(500).json({ message: 'File upload failed' });
        }

        const { patientName, dateOfAppointment, outcome, diagnosis } = req.body;

        // Create a new appointment object
        const newAppointment = new Appointment({
            patientName,
            dateOfAppointment,
            outcome,
            diagnosis,
            files: [],
            notes: [],
            comments: []
        });

        try {
            // Save the appointment to the database
            const savedAppointment = await newAppointment.save();

            // If there are files uploaded, save them and associate with the appointment
            if (req.files.length > 0) {
                for (const file of req.files) {
                    const newFile = new File({
                        filename: file.filename,
                        fileUrl: file.path,
                        appointment: savedAppointment._id
                    });
                    await newFile.save();
                    savedAppointment.files.push(newFile._id);
                }
                await savedAppointment.save();
            }

            // Respond with success message and saved appointment data
            res.status(200).json({ message: 'Appointment logged successfully', appointment: savedAppointment });
        } catch (error) {
            console.error('Error logging appointment:', error);
            res.status(500).json({ message: 'Error logging appointment', error });
        }
    });
};
