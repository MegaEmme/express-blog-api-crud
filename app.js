const express = require('express');

const app = express();

const port = 7000;

const postsRouter = require('./routers/postsRouter');
//collego la cartella public
app.use(express.static('public'));
//registro il body parser per application json
app.use(express.json());

app.use('/posts', postsRouter);

app.get('/', (req,res)=>{
    res.send('<h1>Il mio server</h1>');
});
//attivo il server sulla porta
app.listen(port, ()=> {
    console.log(`sono un server attivo sulla porta ${port}`);
});