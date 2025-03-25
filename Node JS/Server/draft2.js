const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 4040;

const server = http.createServer((req,res)=>{
    const filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);
    const extName = path.extname(filePath).toLowerCase();

    const mimeTypes = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".png": "image/png",
    }

    const contentType = mimeTypes[extName] || "application/octet-stream";

    fs.readFile(filePath,(err,content)=>{
        if(err){
            res.writeHead(404,{"Content-type": "text/html"});
            res.end("<h1>404 Not Found</h1>");
        }else {
            res.writeHead(200,{"Content-Type": contentType});
            res.end(content);
        }
    })
});

server.listen(PORT, ()=>{
    console.log(`The Server is listening at the port ${PORT}`);
})