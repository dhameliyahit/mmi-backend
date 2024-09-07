const cron = require('node-cron');
const scrapeData = require('./scrap.js'); // Import the scrapeData function

// Function to display the current date and time for better logs
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleString(); // Format the time and date for readability
}
console.log("schedule.js File is Running . . . ");
// Schedule the cron job to run every 3 minutes
cron.schedule('*/3 * * * *', async () => {
  console.log(`[${getCurrentTime()}] Cron job triggered...`);
  
  try {
    console.log(`[${getCurrentTime()}] Starting data scraping...`);
    
    // Call the scrapeData function
    await scrapeData();
    
    console.log(`[${getCurrentTime()}] Data scrape completed successfully.`);
  } catch (error) {
    console.error(`[${getCurrentTime()}] Error during data scrape:`, error.message);
  }

  console.log(`[${getCurrentTime()}] Cron job execution finished.\n`);
});
