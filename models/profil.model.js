const mongoose = require('mongoose');

const ProfilSchema = new mongoose.ProfilSchema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        speciality: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        startDevDate: {
            type: String,
            required: true
        },
        qualification: {
            type: [String],
            required: true
        },
        qualificationInProgress: {
            type: String,
            required: false
        },
    }
);

const ProfilModel = mongoose.model('profil', ProfilSchema);

module.exports = ProfilModel;