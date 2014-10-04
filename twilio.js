var twilio = {};

var express = require('express');
var Twilio = require('twilio');

var TWILIO_ACCOUNT_SID = 'AC6be2a1414ab8bd83a22db24e91db6279';
var TWILIO_AUTH_TOKEN = '223bce8a531c574d21c3ca3e78f385f0';

var client = new Twilio.RestClient(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

function processResponse = function(req, res) {
    var text = req.body.Body;
    var responseText = getSpitzersShit(text);

    var from = req.body.From;

}