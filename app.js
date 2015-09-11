var express = require('express')
  , bodyParser = require('body-parser')
  , vincedent = require('./vincedent');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) { res.status(200).send('You dummy!') });
app.post('/vincedent', vincedent);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function () {
  console.log('vincedent-slackbot listening on port ' + port);
});
