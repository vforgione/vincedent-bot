var request = require('request');

module.exports = function (req, res, next) {
  var vinceisms = [
    'You dummy!',
    "That's a fucking dog shit idea!",
    'FFFFFFFUUUUUUUUUUUU',
    'Fuck this shit.. I jus... arrrgh...',
    "Wow! That wasn't supposed to happen.",
    '... srsly!?',
    'You have got to be fucking kidding me',
    'Polymorphism in Django? What are you, an idiot? Get the fuck outta here!',
    'BULLSHIT!!!',
    'Uh huh.... ok...... yeah......... :quietly dying inside:',
    ':boom: :frowning: :gun:'
  ];

  var botPayload = {
    text: vinceisms[Math.floor(Math.random() * vinceisms.length)],
    username: 'vincedentbot',
    channel: req.body.channel_id,
    icon_emoju: ':fire:'
  };

  if (req.body.user_name !== 'slackbot') {
    send(botPayload, function (error, status, body) {
      if (error) {
        return next(error);
      } else if (status !== 200) {
        return next(new Error('Incoming WebHook: ' + status + ' ' + body));
      } else {
        return res.status(200).end();
      }
    });
  } else {
    return res.status(200).end();
  }
}

function send (payload, callback) {
  var path = process.env.INCOMING_WEBHOOK_PATH;
  var uri = 'https://hooks.slack.com/services' + path;
  request({
    uri: uri,
    method: 'POST',
    body: JSON.stringify(payload)
  }, function (error, response, body) {
    if (error) {
      return callback(error);
    }
    callback(null, response.statusCode, body);
  });
}
