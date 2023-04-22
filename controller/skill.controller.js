const SkillModel = require('../models/skill.model');

module.exports.getSkills = async (req, res) => {
    const data = await SkillModel.find().select();

    res.status(200).json(data);
}