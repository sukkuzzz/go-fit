
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const healthRoutes = require('./routes/healthRoutes');
const sequelize = require('./config/db');
const mongoose = require('./config/mongo');
const redisClient = require('./config/redis');

const app = express();
app.use(bodyParser.json());

app.use('/api/health', healthRoutes);

sequelize.sync().then(() => console.log('Postgres database synced'));
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
