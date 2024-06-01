const express = require('express');
const {
    getMedicines,
    getMedicine,
    createMedicine,
    deleteMedicine,
    updateMedicine
} = require('../controllers/medicineController');

const router = express.Router();

router.get('/', getMedicines);
router.get('/:id', getMedicine);
router.post('/', createMedicine);
router.delete('/:id', deleteMedicine);
router.patch('/:id', updateMedicine);

module.exports = router;
