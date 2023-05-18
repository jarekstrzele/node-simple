const http = require("http") ;


const serwer = http.createServer( (req,res) => {
    res.write("Hello from http") ;
    res.end() ;

})



serwer.listen(8000, ()=> {
    console.log("Serwer uruchomiony 127.0.0.1:8000");
}
)



