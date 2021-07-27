//required modules
const express = require('express');
const logger = require('morgan');
const PORT = 4000;
const indexRouter = require('./routes/index');

// require('dotenv').config()
//setup express ap
const app = express();
//configure express app
app.set('view engine', 'ejs');

// Mount middleware app.use()
app.use(logger('dev'));
app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);

app.listen(PORT, console.log(`Our server is live on http://localhost:${PORT}`));