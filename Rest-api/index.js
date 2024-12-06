const { config, connectDB } = require('./config/config');  
const cors = require('cors');  
const apiRouter = require('./router');  
const { errorHandler } = require('./utils');  

connectDB().then(() => {
  const app = require('express')();
  require('./config/express')(app);

 
  app.use(cors({
    origin: config.origin,
    credentials: true
  }));

  
  app.use('/api', apiRouter);


  app.use(errorHandler);

  
  app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}!`);
  });
}).catch(console.error);  

