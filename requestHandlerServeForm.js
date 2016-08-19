
var fs = require('fs');

function start(response) {
	console.log("starting request handler");
	
	var contents = fs.readFile('testForm.html', 'utf8', function(err,contents){
		response.writeHead(200, {"Content-type": "text/html"});
		response.write(contents);
		response.end();
	});
	

}
function upload(response) {
	console.log("uploading request handler");
	response.writeHead(200, {"Content-type": "text/plain"});
	response.write("Hello Upload");
	response.end();
}

exports.start = start;
exports.upload = upload;
