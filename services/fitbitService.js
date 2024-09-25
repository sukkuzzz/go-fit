const axios = require('axios');

const getFitbitData = async (userId) => {
  try {
    const response = await axios.get(`https://api.fitbit.com/1/user/${userId}/activities.json`, {
      headers: {
        Authorization: `Bearer ${process.env.FITBIT_ACCESS_TOKEN}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Fitbit data:', error);
    throw error;
  }
};

module.exports = { getFitbitData };