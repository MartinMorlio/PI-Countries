const { Router } = require('express');
const { postActivity } = require('../controllers/Activity')
const router = Router();


router.post('/activity', postActivity)


module.exports = router;