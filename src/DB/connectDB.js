const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.DB_URL || "mongodb+srv://heetdhameliya59:yLQrb7qqY4EUfA6G@mmi.ggllc.mongodb.net/mmi");
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      process.exit(1);
    }
};

module.exports = connectDB;
