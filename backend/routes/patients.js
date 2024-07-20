const express = require("express");
const {
  getPatients,
  getPatient,
  createPatient,
  deletePatient,
  updatePatient,
} = require("../controllers/patientController");

const router = express.Router();

// We consider discard the patient part.
router.get("/", getPatients);
router.get("/:id", getPatient);
router.post("/", createPatient);
router.delete("/:id", deletePatient);
router.patch("/:id", updatePatient);

module.exports = router;
