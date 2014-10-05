var express = require('express');
var router = express.Router();

var Twilio = require('twilio');
var SIDS = {'+13132087874':'AC6be2a1414ab8bd83a22db24e91db6279', '+12405472780':'AC1ebb3cd2cd6ab8a2e466ca4158bcc6af', '+14423336273': 'AC85e3a1f973eed48e25413f64e880ac65'}
var TOKENS = {'+13132087874':'223bce8a531c574d21c3ca3e78f385f0', '+12405472780':'591c1714512b04ac507357fbde0c23f3', '+14423336273':'ba5fedf59c42e20d1065148f23426e3a'}

var Cleverbot = require('../cleverbot');

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
    var to = req.query.To;
    var client = new Twilio.RestClient(SIDS[to], TOKENS[to]);

    function callback(resp) {
        client.sms.messages.create({
            to: from,
            from: to,
            body: resp.message
        });
    }

    threads[to+from] = threads[to+from] || new Cleverbot();
    threads[to+from].write(message, callback);
    res.render('index/index');
});

module.exports = router;
