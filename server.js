const express = require('express');
const logger = require('morgan');
const PORT = 4000;

const app = express();

app.set('view engine', 'ejs');

app.listen(PORT, console.log(`Our server is live on http://localhost:${PORT}`));