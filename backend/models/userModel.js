const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: {
        street: String,
        city: String,
        province: String,
        zip: String,
    },
    emergencyContact: {
        name: String,
        relationship: String,
        phone: String,
    },
}, { timestamps: true });

// User Model
const User = mongoose.model('User', UserSchema);
module.exports = User;
