const axios = require("axios");
const { BASE_URL } = process.env;
const { Country } = require("../db");

const getCountriesToDb = async () => {
  const getCountries = await axios.get(BASE_URL);
  const allCountries = getCountries.data;
  try {
    const modelCountries = allCountries.map((e) => {
      return {
        name: e.name,
        id: e.alpha3Code,
        img: e.flags,
        continent: e.region,
        capital: e.capital,
        subregion: e.subregion,
        area: e.area
      };
    });
    modelCountries.forEach(async (e) => {
      await Country.findOrCreate({
        where: {
          name: e.name,
          id: e.id,
          img: e.img,
          continent: e.continent,
          capital: e.capital,
          subregion: e.subregion,
          area: e.area,
        },
      });
    });
    console.log("Countries loaded in DB, kinga 😉");
  } catch (error) {
    console.log("En la carga de la DB tenés el siguiente error: ", error);
  }
};

module.exports = { getCountriesToDb };
