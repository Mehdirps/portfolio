const SkillModel = require('../models/skill.model');

module.exports.getSkills = async (req, res) => {
    const skills = await SkillModel.find().select();

    res.status(200).json(skills);
}