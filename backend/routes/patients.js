// IMPORTS
const express = require('express')

// import controller functions from patientController file
const {
    getPatients,
    getPatient,
    createPatient,
    deletePatient,
    updatePatient
} = require('../controllers/patientController') 

// CREATE A ROUTER
const router = express.Router() // instance of the router

// ADD DIFFERENT REQEST HANDLERS ON TO THE ROUTER

// GET all patients
router.get('/', getPatients) 

// GET one patient
router.get('/:id', getPatient) 

// POST a new patient
router.post('/', createPatient)

// DELETE a workout
router.delete('/:id', deletePatient)

// PATCH a workout
router.patch('/:id', updatePatient)

// EXPORT ROUTER
module.exports = router 