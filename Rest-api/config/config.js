const mongoose = require('mongoose');

// Configuration object for your application
const config = {
  port: process.env.PORT || 3000,  // Default to 3000 if no PORT environment variable is set
  origin: 'http://localhost:4200', // Replace with your front-end URL if needed
};

// MongoDB connection function
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/exotic-fruits', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Export both the config and connectDB function
module.exports = {
  config,
  connectDB,
};
