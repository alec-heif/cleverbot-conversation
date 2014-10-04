var express = require('express');
var router = express.Router();

var Twilio = require('twilio');
var TWILIO_ACCOUNT_SID = 'AC6be2a1414ab8bd83a22db24e91db6279';
var TWILIO_AUTH_TOKEN = '223bce8a531c574d21c3ca3e78f385f0';
var client = new Twilio.RestClient(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

var PythonShell = require('python-shell');

var threads = {};

function sendMessage(message, number) {
    client.sms.messages.create({
      to: number,
      from: '+13132087874',
      body: message
    });
};

function killProcess(process, from) {
    process.end(function (err) {
        console.log('Killed procees ' + from);
    });
    delete threads[from];
};

router.post('/', function(req, res) {
    var from = req.body.From;
    var message = req.body.Body;

    if (threads[from]) {
        var thread = threads[from];
        clearTimeout(thread.killer);
        thread.killer = setTimeout(
            function() {
                killProcess(thread.process, from);
            }, 
            300000
        );
        thread.process.send(message);
    }
    else {
        var process = new PythonShell('api.py');
        process.send(text);
        process.on('message', function(message) {
            sendMessage(message, from);
        });
        threads[from] = {
            process: process, 
            killer: setTimeout(
                function() {
                    killProcess(process, from);
                }, 
                300000
            )
        };
    }
});

module.exports = router;
