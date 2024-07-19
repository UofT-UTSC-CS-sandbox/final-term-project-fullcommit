const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');
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

router.post('/logAppointment', appointmentController.logAppointment);

router.post('/uploadTest', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json({ message: 'File upload failed', error: err });
        }
        res.status(200).json({ message: 'File uploaded successfully', files: req.files });
    });
});

module.exports = router;
