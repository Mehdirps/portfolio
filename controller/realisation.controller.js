const RealisationModel = require('../models/realisation.model');

module.exports.getRealisations = async (req, res) => {
    const realisations = await RealisationModel.find().select();

    res.status(200).json(realisations);
}