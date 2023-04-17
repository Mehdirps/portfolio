const ProfilModel = require('../models/profil.model');

module.exports.getProfils = async (req, res) => {
    const profils = await ProfilModel.find().select();

    res.status(200).json(profils);
}