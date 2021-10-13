const { Router } = require('express');
const { postActivity } = require('../controllers/activity')
const router = Router();


router.post('/', postActivity)


module.exports = router;