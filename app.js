const express = require('express');
const SwaggerExpress = require('swagger-express-mw');
const apiController = require('./controllers/apiController');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use('/api', apiController);
app.use(express.static('dist'));

app.get('/swagger', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

module.exports = app;

const config = {
  appRoot: __dirname, // required config
};

SwaggerExpress.create(config, (err, swaggerExpress) => {
  if (err) {
    throw err;
  }

  // install middleware
  swaggerExpress.register(app);
  const port = process.env.PORT || 10010;
  app.listen(port);
});
