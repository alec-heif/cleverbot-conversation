var express = require('express');
var router = express.Router();

var Twilio = require('twilio');
var NUMBERS = ['3132087874', '2405472780', '4423336273']
var SIDS = {'3132087874':'AC6be2a1414ab8bd83a22db24e91db6279', '2405472780':'AC1ebb3cd2cd6ab8a2e466ca4158bcc6af', '4423336273': 'AC85e3a1f973eed48e25413f64e880ac65'};
var TOKENS = {'3132087874':'223bce8a531c574d21c3ca3e78f385f0', '2405472780':'591c1714512b04ac507357fbde0c23f3', '4423336273':'ba5fedf59c42e20d1065148f23426e3a'};

var Cleverbot = require('../cleverbot');

var threads = {};
var timeOutMsg = {};        
var catImage = ['http://i.imgur.com/e5UOBPF.png', 'http://i.imgur.com/FdHYJ9x.png', 'http://i.imgur.com/AzPRUYe.png', 'http://i.imgur.com/GF7x38e.png', 'http://i.imgur.com/ISImBzS.png'];

function killProcess(process, from) {
    delete threads[from];
};


router.get('/', function(req, res) {
    if(req.query.Body != undefined && req.query.From != undefined && req.query.To != undefined) {
        var message = req.query.Body;
        var from = req.query.From;
        var to = req.query.To;
        to = NUMBERS.filter(function(val) {
            return to.indexOf(val) > -1;
        })[0];
        NUMBERS.forEach(function(val, index) {
            if (to.indexOf(val) > -1) {
                to = val;
            }
        })
        console.log(to);
        console.log(SIDS[to]);
        var client = new Twilio.RestClient(SIDS[to], TOKENS[to]);
        function callback(resp) {
            client.sms.messages.create({
                to: from,
                from: to,
                body: resp.message
            });
        }

        function update(to, from){
            clearTimeout(timeOutMsg[to+from]);
            if(Math.random() < .3){
              timeOutMsg[to+from] = setTimeout(function() {
                client.messages.create({
                  to: from,
                  from: to,
                  body: "I miss you",
                  mediaUrl: catImage[Math.floor(Math.random() * catImage.length)],  
                });
              }, Math.floor(Math.random()*90000 + 30000));
            } 
        }


        threads[to+from] = threads[to+from] || new Cleverbot();
        threads[to+from].write(message, callback);
        update(to,from);
    }
    res.render('index/index', {number: NUMBERS[Math.floor(Math.random() * NUMBERS.length)] });
});

module.exports = router;
