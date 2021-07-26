//required modules
const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const PORT = 4000;
const indexRouter = require('./routes/index');


require('dotenv').config()
require('./config/passport');
require('./config/database');

//setup express app
const app = express();
//configure express app
app.set('view engine', 'ejs');

// Mount middleware app.use()
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(
    session({
        secret: "Flikr",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use('/', indexRouter);



app.listen(PORT, console.log(`Our server is live on http://localhost:${PORT}`));