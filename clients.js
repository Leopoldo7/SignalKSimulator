var fs = require("fs");
const WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:9330');


ws.onmessage = function (event) {
    var data = JSON.parse(event.data);
	
	/*fs.appendFile('message.txt', event.data , function (err) {
	  if (err) throw err;
	  console.log('Saved!');
	});*/
	console.info(data);
	
};