const {Router} = require('express');
const axios = require('axios');
const { getAllCountries, getCountryById, getCountryByName } = require('../controllers/countries');
const {API_COUNTRIES_ENDPOINT,
    API_NAME_ENDPOINT} = require('../constants')
const {Country, Activity, countries_activities} = require('../db')





const router = Router()

router.get('/', getAllCountries)
router.get('/:name', getCountryByName)
router.get('/:id', getCountryById)





module.exports = router