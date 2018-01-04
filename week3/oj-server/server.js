const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const socketIO = require('socket.io');
const IO = socketIO();
const editorSocketService = require('./services/editorSocketService')(IO);
const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');
const mongoose  = require('mongoose');
mongoose.connect('mongodb://ysj:yyssjj@ds127936.mlab.com:27936/cs503sy');

app.use('/',indexRouter);
app.use('/api/v1',restRouter);
app.use(express.static(path.join(__dirname,'../public/')));

app.use((req,res)=> {
    res.sendFile('index.html',{ root:path.join(__dirname,'../public/')})
})

//app.listen(3000, () => console.log('Example app listening on port 3000!'));
const server = http.createServer(app);
IO.attach(server);
server.listen(3000);
server.on('listening',onListening);

function onListening(){
    console.log('ap rning 3000');
}