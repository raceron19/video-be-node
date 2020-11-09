const express = require('express');
const app = express();
const debug = require('express-debug');


const { config } = require('./config/index');
const moviesApi = require('./routes/moviesRouter');

const { logErrors, errorHandler, wrapError } = require('./utils/middleware/errorHandler');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

//body parser
app.use(express.json());
debug(app);

moviesApi(app);

app.use(notFoundHandler);

// middlewares
app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);



app.listen(config.port,
  function () {
    console.log(`Listen on: http://localhost:${config.port}`);
});
