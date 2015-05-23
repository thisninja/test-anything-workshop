var repeatCallback = require(process.argv[2]);
var test = require('tape');
test('repeatCallback should call callback n times', function(t) {
	var rand = Math.floor(1 + Math.random() + (100-1)); // random number from 1 to 99
	t.plan(rand);
	repeatCallback(rand, function() {
		t.pass('cb has been calling');
	})
});