const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        startedDate: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        level: {
            type: String,
            required: true
        },
    }
);

const SkillModel = mongoose.model('skills', SkillSchema);

module.exports = SkillModel;