// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC6c056307e73f78bf2dafa38531ec18b2';
const authToken = 'c94e8baaaceadab955ed912ddeb472f5';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+13129671805',
     to: '+14018718377',
     body: 'from twilio thee is a msgejkbjerg'
   })
  .then(message => console.log(message.sid))
  .done();