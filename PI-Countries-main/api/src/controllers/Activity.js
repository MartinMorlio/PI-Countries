const { Country, Activity } = require('../db');

const postActivity = async (req, res) => {
    const { name, difficulty, duration, season, countryID } = req.body;
    console.log(req.body);
   if(!name || !difficulty || !duration || !season) {
       return res.json({error: "I can´t add activity"});
   } 
    const createActivity = await Activity.create({
        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season
    });
    const checkCountry = await Country.findAll({
        where: {
            id: countryID
        }
    });
    const addActivity = await createActivity.addCountries(checkCountry);

    return res.send(addActivity);
}

module.exports = { postActivity }