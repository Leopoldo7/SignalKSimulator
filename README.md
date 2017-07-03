## SIGNAL K SIMULATOR
Simulatore di websocket signalk

# How to run
    * npm install
    * npm start
    * enjoy

# Configuration url
Per configurare l'ip e il path di questa websocket modificare la riga:
<code>
    const wss = new WebSocket.Server({ 
            port: 9330,
            path: "/signalk/v1/stream"
   });
</code>
Per testare i dati connettersi con un client websocket oppure lanciare node clients.js


PS. Se sivogliono dati piu veloci o piu lenti aumentare o diminuire i millisecondi nella sleep()

* Se si vuole un ciclo infinito decommentare il ciclo while