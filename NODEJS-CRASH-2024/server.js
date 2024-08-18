import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log(__filename, __dirname);

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;

    try {
        if (req.method === "GET") {
            if (req.url === '/') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end("<h1>Home Page</h1>");
            } else if (req.url === '/about') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end("<h1>About</h1>");

            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end("<h1>Not Found</h1>");

            }
        } else {
            throw new Error("Method Not Allowed");
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end("Server Error");

    }

});

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});