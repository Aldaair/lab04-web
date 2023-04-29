const express = require ('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const {Server} = require('socket.io')
const io = new Server(server)


app.use(express.static(__dirname + '/insp/insp_admin/'));

io.on('connection', (socket) => {
    // Procedimiento 4:
   socket.on('chat', (msg) => {
        io.emit('chat', msg)
    })
})

app.get('/', (req, resp) => {
    resp.sendFile(`${__dirname}/cliente/index.html`)
})
app.get('/insp', (req, resp) => {
    resp.sendFile(`${__dirname}/insp/insp_admin/index.html`)
})

server.listen(3000,() => {
    console.log('Servidor corriendo en http://localhost:3000')
})