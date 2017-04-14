// Twilio Credentials
var accountSid = process.env.TWILIO_ACCT;
var authToken = process.env.TWILIO_TOKEN;

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

client.messages.create({
  to: process.env.NUMBER_TO,
  from: process.env.NUMBER_FROM,
  body: "This is the ship that made the Kessel Run in fourteen parsecs?" + Date.now()
}, function(err, message) {
  if (err) {
    return console.error(err);
  }
  console.log(message.sid);
});