//required modules
const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const PORT = 4000;
const methodOverride = require('method-override');

const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');


require('dotenv').config()
require('./config/database');
require('./config/passport');
const passport = require('passport');

//setup express app
const app = express();
//configure express app
app.set('view engine', 'ejs');

// Mount middleware app.use()

app.use(logger('dev'));
app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride('_method'));
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
app.use('/posts', postsRouter);



app.listen(PORT, console.log(`Our server is live on http://localhost:${PORT}`));