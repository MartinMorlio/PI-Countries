const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const { Country, Activity } = require("../db");

const getCountries = async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) {
      const allCountries = await Country.findAll({ include: Activity });
      res.send(allCountries);
    } else {
      const countryQuery = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: Activity,
      });
      if (!countryQuery[0]) {
        console.log("Error! No hay país.");
        return res
          .json({ error: 'No se encuentra ningún país con dicho nombre' });
      }
      return res.send(countryQuery);
    }
  } catch (error) {
    res.send(error);
  }
};

const getCountryById = async (req, res) => {
  try {
    const idCountry = req.params.idCountry.toUpperCase();
    const foundCountry = await Country.findOne({
      where: {
        id: idCountry,
      },
      include: Activity,
    });
    return res.json(foundCountry);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getCountries,
  getCountryById,
};
