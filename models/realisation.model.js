const mongoose = require('mongoose');

const RealisationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        languages: {
            type: [String],
            required: true
        },
        languagesIcons: {
            type: [String],
            required: true
        },
        source: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: true
        },
        picture: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: false
        }
    }
);

const RealisationModel = mongoose.model('realisation', RealisationSchema);

module.exports = RealisationModel;