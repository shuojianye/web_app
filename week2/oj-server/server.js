const express = require('express');
const app = express();
const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');
const mongoose  = require('mongoose');
mongoose.connect('mongodb://shuojian:shuojian@ds127936.mlab.com:27936/cs503sy');

app.use('/',indexRouter);
app.use('/api/v1',restRouter);
app.use(express.static(path.join(__dirname,'../../public/')));

app.use((req,res)=> {
    res.sendFile('index.html',{ root:path.join(__dirname,'../../public/')})
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));