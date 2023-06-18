const moj_jeden = require("./jeden.js") ;
const path = require("path") ;
const EventEmiiter = require('events') ;

const event = new EventEmiiter() ;

const sciezka = __filename ;
const s2 = __dirname ;
moj_jeden() ;

console.log(sciezka) ;
console.log(s2) ;


event.on("wakacje", (msg)=>{
    console.log(msg)
})

event.emit("wakacje", "Już niedługo wakacje") ;


event.on("node", (msg) => {
    console.log(msg)
}) ;

event.emit("node", "NodeJs jest fajny") ;
