const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use the environment variable or default to a local database
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/exotic-fruits', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
