const http = require("http") ;


const serwer = http.createServer( (req,res) => {
    
    res.statusCode=200;
    res.setHeader("Content-Type", "text/html") ;
    
    res.write(`<h3>HTTP ${req.httpVersion} ${req.method}`) ;
    res.write(`<h3>URL:  ${req.url}`) ;
    res.write(`<pre> ${JSON.stringify(req.headers, null, 4)}</pre>`) ;
    
    res.end("<h1> end </h1>") ;
})



serwer.listen(8000, ()=> {
    console.log("Serwer uruchomiony 127.0.0.1:8000");
}
)



