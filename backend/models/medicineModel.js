const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const medicineSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    effects: [{
        type: String,
        required: true,
    }],
    cautions: [{
        type: String,
        required: true,
    }],
    combinations: [{
        type: String,
        required: true,
    }],
    dosageForm: {
        type: String,
        required: true,
    },
    manufacturer: {
        type: String,
        required: true,
    },
    activeIngredients: [{
        name: String,
        strength: String,
    }],
    // Add or modify as needed
}, { timestamps: true });

module.exports = mongoose.model('Medicine', medicineSchema);
