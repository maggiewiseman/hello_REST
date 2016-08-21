var server = require("./server");
var router = require("./router");
var formidable = require("formidable");

var requestHandler = require("./requestHandlerServeForm");

var handle = {};

handle["/"]= requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/upload"] = requestHandler.upload;
handle["/processForm"] = requestHandler.processForm;

server.start(router.route, handle);
