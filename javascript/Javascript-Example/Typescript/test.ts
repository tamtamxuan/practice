import validation = require('./validation');
import zip = require('./zipCodeValidator');
import letters = require('./lettersOnlyValidator');
var strings = ['Hello', '98052', '101'];
// Validators to use
var validators: { [s: string]: Validation.StringValidator; } = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(s => {
	for (var name in validators) {
		console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
	}
});
