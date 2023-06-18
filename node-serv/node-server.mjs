import http from 'http' ;

const server = http.createServer((req, res) => {
    console.log(req);
    res.end("witaj świecie") ;
})

const port = 8000 ;
server.listen(port, ()=>{
    console.log(`Server na porcie ${port}`) ;
})