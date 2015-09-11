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

  var botPayload = { text: vinceisms[Math.floor(Math.random() * vinceisms.length)] };

  if (req.body.user_name !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}
