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
	runfunc();
});

module.exports = router;
