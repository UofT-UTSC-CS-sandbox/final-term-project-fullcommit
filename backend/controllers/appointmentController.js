const Appointment = require('../models/appointment');
const File = require('../models/file');
const multer = require('multer');
const path = require('path');

// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage }).array('files');

exports.logAppointment = (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.error('File upload error:', err);
            return res.status(500).json({ message: 'File upload failed' });
        }
        const { patientName, dateOfAppointment, outcome, diagnosis } = req.body;

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
            const savedAppointment = await newAppointment.save();

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

            res.status(200).json({ message: 'Appointment logged successfully', appointment: savedAppointment });
        } catch (error) {
            console.error('Error logging appointment:', error);
            res.status(500).json({ message: 'Error logging appointment', error });
        }
    });
};
