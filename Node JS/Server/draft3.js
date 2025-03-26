const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer((req,res)=>{
    const filePath = path.join(__dirname,req.url === "/" ? "index.html" : req.url);
    

    const extName = path.extname(filePath);
    const mimeTypes = {
        ".html" : "text/html",
        ".css" : "text/css",
        ".js" : "text/js",
        ".png" : "image/png",
    }
    const contentType = mimeTypes[extName] || "applications/octet-stream"
    fs.readFile(filePath,(err,content)=>{
       if(err){
        res.writeHead(404,{"Content-Type": "text/html"})
        res.end("<h1>Error Agya ha meri Jann</h1>")
       }else{
        res.writeHead(200,{"Content-Type": contentType})
        res.end(content)
       }
    })
});
const PORT = 3000;

server.listen(PORT,()=>{
   console.log(`The Server is listening on the PORT ${PORT}`)
})