const { Router } = require('express');
const { getCountries, getCountryById } = require('../controllers/country')
const router= Router();

//ver las funciones

router.get('/', getCountries)  
router.get('/:idCountry', getCountryById)  

module.exports = router;