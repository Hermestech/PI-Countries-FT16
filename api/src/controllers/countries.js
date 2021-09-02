const axios = require('axios');
const { Op } = require('sequelize');
const {
    API_COUNTRIES_ENDPOINT,
    API_NAME_ENDPOINT,
    API_ID_ENDPOINT

} = require('../constants')
const {Country, Activity, countries_activities} = require('../db')


const getAllCountries = async(req, res, next) => {
    try{
        let apiCountries = (await axios.get(API_COUNTRIES_ENDPOINT)).data;
        apiCountries = apiCountries.map(({ alpha3Code,name,flag,region,capital }) => ({
            alpha3Code,
            name,
            flag,
            region,
            capital,
        }));

        const localCountries = await Country.findAll({
            include: [
                {
                    model: Activity,
                    attributes: ['name','difficult','season','duration']
                },
            ],

        });

        return res.status(201).json([...localCountries, ...apiCountries])
    } catch(err){
        next(err)
    }
}

async function getCountryById(req, res, next){
    const id = req.params.id

    try{
        countryApi = await axios.get(`${API_ID_ENDPOINT}${id}`)
        countryApi = countryApi.data;
        
        let showCountry = {
            id: countryApi.alpha3Code,
            flag: countryApi.flag,
            name: countryApi.name,
            region: countryApi.region,
            capital: countryApi.capital
        }
        res.send(showCountry)
   
    }catch(error){
        Country.findByPk(id, {include: Activity})
        .then((country) => {
            res.send(country)
        })
        .catch((error) => {
            res.status(500).send('Country not found')
        })
    }
}

async function getCountryByName(req, res, next){

    const name = req.query.name;

    try{
        countryApi = await axios.get(`${API_NAME_ENDPOINT}${name}`)
        countryApi = countryApi.data

        let showCountry = {
            id: countryApi.alpha3Code,
            flag: countryApi.flag,
            name: countryApi.name,
            region: countryApi.region,
            capital: countryApi.capital
        }
        res.send(showCountry)

    } catch(error){
        console.error(error)
    }
}


module.exports = {
    getAllCountries,
    getCountryById,
    getCountryByName
}