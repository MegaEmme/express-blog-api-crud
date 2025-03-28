const express = require('express');

const app = express();

const port = 7000;

const postsRouter = require('./routers/postsRouter');

app.use('/posts', postsRouter);

app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.send('<h1>Il mio server</h1>');
});

app.listen(port, ()=> {
    console.log('sono un server attivo sulla porta ' + port);
});