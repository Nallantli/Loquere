const Spinner = require('node-spintax');

function getArray(text) {
	var spinner = new Spinner(text);
	console.log(spinner.unspin());
}