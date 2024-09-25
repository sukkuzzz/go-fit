const express = require('express');
const { logActivity, syncFitbitData } = require('../controllers/healthController');

const router = express.Router();

router.post('/log', logActivity);
router.get('/sync/fitbit/:userId', syncFitbitData);

module.exports = router;
