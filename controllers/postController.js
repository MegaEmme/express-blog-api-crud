const posts = require('../data/posts');

function index (req,res){
    res.json(posts);
};

function show (req,res){
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if(!post){
        return res.status(404).json({
            error: 'Not Found',
            message: 'Post non trovato'
        });
    };
    res.json(post);
};

function store (req,res){
    res.send('Creazione nuovo dolce');
};

function update (req,res){
    const {id} = req.params;
    res.send('Modifica parziale del dolce ' + id);
};

function modify (req,res){
    const {id} = req.params;
    res.send('Modifica parziale del dolce ' + id);
};

function destroy (req,res){
    const {id} = req.params
    res.send('Eliminazione del dolce ' + id);
};

module.exports = { index, show, store, update, modify, destroy};