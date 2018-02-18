const express = require('express');
const apiController = require('./controllers/apiController');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/api', apiController);

app.listen(3000);
