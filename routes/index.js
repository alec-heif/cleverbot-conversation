var express = require('express');
var router = express.Router();

var Twilio = require('twilio');
var TWILIO_ACCOUNT_SID = 'AC6be2a1414ab8bd83a22db24e91db6279';
var TWILIO_AUTH_TOKEN = '223bce8a531c574d21c3ca3e78f385f0';
var client = new Twilio.RestClient(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

var Cleverbot = require('cleverbot-node');

var threads = {};

function killProcess(process, from) {
    delete threads[from];
};

router.get('/', function(req, res) {
    if(!req.query.Body || !req.query.From) {
        return;
    }
    var message = req.query.Body;
    var from = req.query.From;

    function callback(resp) {
        client.sms.messages.create({
            to: from,
            from: '+13132087874',
            body: resp.message
        });
    }

    threads[from] = threads[from] || new Cleverbot();
    threads[from].write(message, callback);
    res.render('index/index');
});

module.exports = router;
