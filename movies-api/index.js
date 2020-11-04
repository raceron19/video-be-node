const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/moviesRouter');


//body parser
app.use(express.json());

moviesApi(app);



app.listen(config.port,
  function () {
    console.log(`Listen on: http://localhost:${config.port}`);
});
