var querystring = require("querystring");
var fs = require('fs');
var formidable = require("formidable");
var util = require("util");

function start(request, response, postData) {
	console.log("request handler start was called.");
	
	var contents = fs.readFile('testForm.html', 'utf8', function(err,contents){
		response.writeHead(200, {"Content-type": "text/html"});
		response.write(contents);
		response.end();
	});
}


function upload(request, response, postData) {
	console.log("request handler upload was called.");
	response.writeHead(200, {"Content-type": "text/plain"});
	response.write("You've sent: " + querystring.parse(postData).text);
	response.end();
}

function processForm(request, response, postData){
	debugger;
	console.log("request handler processForm was called.");

	var fields = [];
	var form = new formidable.IncomingForm();

	form.on('error', function(err) {
		console.log("We got an error!" + err);
	});

	form.on('field', function(field, value){
		console.log(field);
		console.log(value);
		fields[field] = value;
	});

	form.on('end', function() {
		response.writeHead(200, {"Content-type": "text/plain"});
		response.write("received data from form");
		response.end(util.inspect({
            fields: fields}));
	});

	form.parse(request);
	console.log("After form.parse, Our form is " + form);
}


exports.start = start;
exports.upload = upload;
exports.processForm = processForm;
