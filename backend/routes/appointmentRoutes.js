const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
const multer = require('multer');
const path = require('path');

// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the upload directory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage }).array('files');

// Log a new appointment
// @route POST /logAppointment
// @desc Logs a new appointment with the provided details
// @access Public
router.post('/logAppointment', appointmentController.logAppointment);

// Upload test files
// @route POST /uploadTest
// @desc Uploads files to the server
// @access Public
router.post('/uploadTest', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json({ message: 'File upload failed', error: err });
        }
        res.status(200).json({ message: 'File uploaded successfully', files: req.files });
    });
});

module.exports = router;
