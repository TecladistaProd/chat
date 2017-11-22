const express = require('express')
const app = express()
const http = require('http').Server(app)
const BodyParser = require('body-parser')
const io = require('socket.io')(http)
const porta = process.env.PORT || 5400

app.use(express.static('client'))
app.use(BodyParser.json())

http.listen(porta, ()=>{
  console.log(`Porta: http://localhost:${porta}`)
})

io.on('connect', socket=>{
  socket.on('chatvue', message=>{
    io.emit('chatvue', message)
  })
  socket.on('disconnect', ()=>{
    //
  })
})
