const fs = require("fs") ;
const path = require("path") ;
const http = require("http") ;

const MIME_TYPES = {
    ".html" : "text/html",
    ".css" : "text/css",
    ".jpg" : "image/jpeg",
} ;


const server = http.createServer( function(req, res) {
    //console.log(req.url) ;

    let fileName = null ;
    let file = null ;    

    if(req.url ==="/" || req.url === "/index.html"){
         fileName = "index.html" ;
         console.log("in if FileName: ", fileName) ;
    } else {
        fileName = req.url.slice(1) ; //wycinamy `/`
    }
   
   // res.writeHead(200, {"Content-Type": "text/html"}) ;
    res.writeHead(200, {"Content-Type": MIME_TYPES[path.extname(fileName)]}) ;
    
   //console.log("!!!check fileName: ", fileName) ;
    
    file = fs.createReadStream(path.join(__dirname, "public", fileName));

    //jeżeli nie znajdzie pliku to wyrzuciu błąd
    file.on("error", (err) => {
        res.writeHead(404, "not Found") ;
        res.end() ;

    })


    file.pipe(res) ;
}) ;

server.listen(8080, function(){
    console.log("Server workong on http://localhost:8080") ;
 })


