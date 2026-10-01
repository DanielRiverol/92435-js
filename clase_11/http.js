import http from "http"

const server = http.createServer((req, res)=>{
    res.end("hola mundo")

})

server.listen(8080, ()=> console.log(`server corriendo em http://localhost:8080`))
