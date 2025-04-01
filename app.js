const express = require('express');

const app = express();

const port = 7000;

const postsRouter = require('./routers/postsRouter');

const errorsHandler = require('./middlewares/errorsHandler');
//registro gli assets statici
app.use(express.static('public'));
//registro il body parser per application json
app.use(express.json());
//resgistro la path in cui posizionare il router
app.use('/posts', postsRouter);
//registro il middleware errorsHandler
app.use(errorsHandler);

app.get('/', (req,res)=>{
    res.send('<h1>Il mio server</h1>');
});


//attivo il server sulla porta
app.listen(port, ()=> {
    console.log(`sono un server attivo sulla porta ${port}`);
});