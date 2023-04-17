const router = require('express').Router();
const skillController = require('../controller/skill.controller');
const profilController = require('../controller/profil.controller');
const realisationController = require('../controller/realisation.controller');

router.get('/skills', skillController.getSkills);
router.get('/realisations', realisationController.getRealisations);
router.get('/profil', profilController.getProfils);

module.exports = router;