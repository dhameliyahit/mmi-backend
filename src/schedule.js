// schedule.js
const cron = require('node-cron');
const scrapeData = require('./scrap.js'); // Import the scrapeData function

// Function to display the current time
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString(); // Format the time for readability
}

// Schedule the cron job to run every 3 minutes
cron.schedule('*/3 * * * *', async () => {
  console.log(`[${getCurrentTime()}] Running cron job...`);
  
  try {
    await scrapeData();
    console.log(`[${getCurrentTime()}] Data scrape completed successfully.`);
  } catch (error) {
    console.error(`[${getCurrentTime()}] Error during data scrape:`, error.message);
  }
});
