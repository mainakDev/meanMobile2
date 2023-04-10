const http = require('http')
const express = require('express')

const app = express()

const port = 3001
const server = http.createServer((req, res) => {
    res.write('<html>')
    res.write('<head><title>Node.js Server</title></head>')
    res.write('<body><h1>First Node.js server</h1></body>')
    res.write('</html>')
    res.end()
    console.log(req)
})

server.listen(port, () => {
    console.log(`Server started at port ${port}`);
})