const mongoose = require('mongoose');

const workoutLogSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  exercise: { type: String, required: true },
  duration: { type: Number, required: true },
  calories: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const WorkoutLog = mongoose.model('WorkoutLog', workoutLogSchema);

module.exports = WorkoutLog;
