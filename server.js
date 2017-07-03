const WebSocket = require('ws');
var json = require('./signalk.json');

const wss = new WebSocket.Server({ 
  port: 9330,
  path: "/signalk/v1/stream"
   });

wss.on('connection', function connection(ws) {
	
  console.info("Cliente Connesso!");
  console.info("Invio dati...");
  //while(true){

      for(j in json){
      
        //console.info(json[j]);
        ws.send(JSON.stringify(json[j]));
        sleep(300);
      
      }
  //    console.info("Nuovo giro, nuova corsa...\n");
  //}
  
  console.info("Finito!")
 
});

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}