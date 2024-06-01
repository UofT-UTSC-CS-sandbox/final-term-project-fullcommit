const Medicine = require('../models/medicineModel');
const mongoose = require('mongoose');

// GET list of all medicines
const getMedicines = async (req, res) => {
    try {
        const medicines = await Medicine.find({});
        res.status(200).json(medicines);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET one medication
const getMedicine = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such medicine' });
    }

    try {
        const medicine = await Medicine.findById(id);
        if (!medicine) {
            return res.status(404).json({ error: 'No such medicine' });
        }
        res.status(200).json(medicine);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// CREATE new medicine in db
const createMedicine = async (req, res) => {
    const { name, effects, cautions, combinations, dosageForm, manufacturer, activeIngredients } = req.body;

    try {
        const medicine = await Medicine.create({
            name,
            effects,
            cautions,
            combinations,
            dosageForm,
            manufacturer,
            activeIngredients,
        });
        res.status(201).json(medicine);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE medicine from db
const deleteMedicine = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such medicine' });
    }

    try {
        const medicine = await Medicine.findOneAndDelete({ _id: id });
        if (!medicine) {
            return res.status(404).json({ error: 'No such medicine' });
        }
        res.status(200).json({ message: 'Medicine deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE medicine info
const updateMedicine = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such medicine' });
    }

    try {
        const medicine = await Medicine.findOneAndUpdate({ _id: id }, req.body, { new: true, runValidators: true });
        if (!medicine) {
            return res.status(404).json({ error: 'No such medicine' });
        }
        res.status(200).json(medicine);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getMedicines,
    getMedicine,
    createMedicine,
    deleteMedicine,
    updateMedicine
};
