var request = require('request');

module.exports = function (req, res, next) {
  var vinceisms = [
    'You dummy!',
    'FFFFFFFUUUUUUUUUUUU',
    'Fff.. I jus... arrrgh...',
    "Wow! That wasn't supposed to happen.",
    '... srsly!?',
    'You have got to be freaking kidding me',
    'Polymorphism in Django? What are you, an idiot?',
    'Uh huh.... ok...... yeah......... :quietly dying inside:',
    ':boom: :frowning: :gun:',
    'Burn this shit to the ground.',
    'Coffee run!'
  ];

  var botPayload = {
    text: vinceisms[Math.floor(Math.random() * vinceisms.length)],
    username: 'vincedentbot',
    channel: req.body.channel_id,
    icon_emoji: ':fire:'
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
  var uri = 'https://hooks.slack.com/services/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';
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
