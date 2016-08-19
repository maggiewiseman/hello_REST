var querystring = require("querystring");
var fs = require('fs');

function start(response, postData) {
	console.log("request handler start was called.");
	
	var contents = fs.readFile('testForm.html', 'utf8', function(err,contents){
		response.writeHead(200, {"Content-type": "text/html"});
		response.write(contents);
		response.end();
	});
}


function upload(response, postData) {
	console.log("request handler upload was called.");
	response.writeHead(200, {"Content-type": "text/plain"});
	response.write("You've sent: " + querystring.parse(postData).text);
	response.end();
}

exports.start = start;
exports.upload = upload;
