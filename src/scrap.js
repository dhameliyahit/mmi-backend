// scrap.js
const axios = require('axios');
const cheerio = require('cheerio');
const Data = require('./model/DataModel.js'); // Import the data model

async function scrapeData() {
  try {
    const url = 'https://www.tickertape.in/market-mood-index';
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const result = $('.number').map((index, element) => $(element).text()).get();
    
    console.log('Extracted Data:', result);

    // Save data to MongoDB
    const lastData = await Data.findOne().sort({ timestamp: -1 }).exec();
    const lastValue = lastData ? lastData.value : null;

    // Only store data if it's different from the last value
    for (const value of result) {
      if (value !== lastValue) {
        await Data.create({ value });
        console.log('New data saved to MongoDB:', value);
      } else {
        console.log('Data is the same as the last entry, not saving:', value);
      }
    }
  } catch (error) {
    console.error('Error scraping the website:', error.message);
  }
}

module.exports = scrapeData;
