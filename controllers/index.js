const Post = require('../models/post');

module.exports = {
    index,
    create
};

function index(req,res) {
    console.log(req.user);
    Post.find({}, function (err, post) {
        res.render('index', {
            post,
            user: req.user
        });
    });
};

function create(req, res) {
    const post = new Post(req.body);
    post.save(function (err) {
        if (err) return res.render('/index', {
            post,
            user: req.user
        });
        console.log(post);
    // for now, redirect right back to new.ejs
        res.redirect('/');
    });
}
