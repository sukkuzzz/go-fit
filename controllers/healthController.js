const HealthActivity = require('../models/healthActivity');
const WorkoutLog = require('../models/workoutlog');
const redisClient = require('../config/redis');
const { getFitbitData } = require('../services/fitbitService');

// Log health activity
const logActivity = async (req, res) => {
  try {
    const { type, duration, calories } = req.body;
    const activity = await HealthActivity.create({ type, duration, calories });

    // Cache the activity data
    redisClient.setex(`activity_${activity.id}`, 3600, JSON.stringify(activity));

    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ error: 'Error logging activity' });
  }
};

// Sync Fitbit data
const syncFitbitData = async (req, res) => {
  try {
    const userId = req.params.userId;
    const data = await getFitbitData(userId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Fitbit data' });
  }
};

module.exports = { logActivity, syncFitbitData };
