const { config, connectDB } = require('./config/config');  // Import config and connectDB
const cors = require('cors');  // Import CORS
const apiRouter = require('./router');  // Import API router
const { errorHandler } = require('./utils');  // Import error handler

connectDB().then(() => {
  const app = require('express')();
  require('./config/express')(app);

  // Enable CORS for requests coming from the origin defined in config
  app.use(cors({
    origin: config.origin,
    credentials: true
  }));

  // Define API routes
  app.use('/api', apiRouter);

  // Error handling middleware
  app.use(errorHandler);

  // Start the server using the port defined in config
  app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}!`);
  });
}).catch(console.error);  // Handle errors in DB connection

