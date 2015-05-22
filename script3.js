var fancity = require(process.argv[2]);
var test = require('tape');
test('fancity accept only strings', function(t) {
	t.equal(fancity('Hello'), '~*~Hello~*~');
	t.equal(fancity('Hello', true), '~*~HELLO~*~');
	t.equal(fancity('Hello', false, '!'), '~!~Hello~!~');
	t.end();
});