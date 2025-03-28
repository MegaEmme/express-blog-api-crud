const posts = require('../data/posts');

function index (req,res){
    let filteredPosts = posts;
    if(req.query.tags){
        filteredPosts = posts.filter(post => post.tags.includes(req.query.tags));
    }
    res.json(filteredPosts);
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
    res.send('Creazione nuovo post');
};

function update (req,res){
    const {id} = req.params;
    res.send('Modifica parziale del post ' + id);
};

function modify (req,res){
    const {id} = req.params;
    res.send('Modifica parziale del post ' + id);
};

function destroy (req,res){
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    if(!post){
        res.status(404);
        return res.json({
            status: 404,
            error: 'Not Found',
            message: 'Post non trovato'
        });
    };
    posts.splice(posts.indexOf(post), 1);
    console.log(posts);
    res.sendStatus(204);
};

module.exports = {index, show, store, update, modify, destroy};