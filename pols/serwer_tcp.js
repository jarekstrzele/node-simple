const fs = require("fs") ;
const net = require("net") ; //moduł bazuje na protokole TCP/IP

// socket - to podłączony klient
const server = net.createServer((socket) => {
    //socket to stream
    socket.write("hello world") ;

    socket.end("Koniec połączenia") ;

})

server.listen(8080, ()=> console.log("Serwer uruchomiony 127.0.0.1:8080"));



