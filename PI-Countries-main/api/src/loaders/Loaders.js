const axios = require("axios");
const { DB_URL } = process.env;
const { Country } = require('../db');

const getCountriesToDb = async () => {
  const getCountries = await axios.get(DB_URL);
  const allCountries = getCountries.data;
  try {
    const modelCountries = allCountries.map((l) => {
        return {
            name: l.name,
            id: l.alpha3Code || l.alpha2Code,
            img: l.flag,
            continent: l.region,
            capital: l.capital || "No se ha encontrado la capital de este país",
            subregion: l.subregion,
            area: l.area || 0,
            population: l.population
        };
    });
    modelCountries.forEach(async(e) =>{
        await Country.findOrCreate({
            where:{
                name: e.name,
                id: e.id,
                img: e.img,
                continent: e.continent,
                capital: e.capital,
                subregion: e.subregion,
                area: e.area,
                population: e.population

            },
        });
    });
    console.log('Countries loaded in DB :)')
}
catch(error) {
    console.log('En la carga de la DB tenés el siguiente error: ', error)
}
}

module.exports = { getCountriesToDb };
