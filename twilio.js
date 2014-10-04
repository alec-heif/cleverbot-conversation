var twilio = {};

var express = require('express');
var Twilio = require('twilio');

var TWILIO_ACCOUNT_SID = 'Your account here';
var TWILIO_AUTH_TOKEN = 'Your token here';

var client = new Twilio.RestClient(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

function processResponse = function(req, res) {
    var text = req.body.Body;
    var responseText = getSpitzersShit(text);

    client.sms.messages.create({
      to: user.phone,
      from:'+13132087874',
      body:'You have entered a high crime zone! Be careful.'
    });
    twilio.send()
    var from = req.body.From;

}