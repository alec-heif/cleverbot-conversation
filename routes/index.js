var express = require('express');
var router = express.Router();

/**
Shows the homepage. Displays a list of posts sorted so that 
the newest post appears first in the page.
Tells the view whether a user is logged in.
**/
router.get('/', function(req, res) {
	res.render('index/index');
});

router.post('/', function(req, res, next) {
    var text = req.body.Body;
    var responseText = getSpitzersShit(text);

    client.sms.messages.create({
      to: user.phone,
      from:'+13132087874',
      body:'You have entered a high crime zone! Be careful.'
    });
    twilio.send()
    var from = req.body.From;
});

module.exports = router;
