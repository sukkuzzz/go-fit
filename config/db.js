const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_DB, process.env.PG_USER, process.env.PG_PASSWORD, {
  host: process.env.PG_HOST,
  dialect: 'postgres',
});

sequelize.authenticate()
  .then(() => console.log('Postgres connected...'))
  .catch(err => console.error('Error connecting to Postgres:', err));

module.exports = sequelize;
