const mongoose = require('mongoose');


const config = {
  port: process.env.PORT || 3000,  
  origin: 'http://localhost:4200', 
};


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


module.exports = {
  config,
  connectDB,
};
