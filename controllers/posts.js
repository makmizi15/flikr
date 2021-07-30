const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
    create: createPost,
    addComment,
    show

};

function createPost(req,res) {
    res.render('posts/create', { user: req.user});
}

function addComment(req, res) {
    Post.findById(req.params.id, function (err, post) {
        req.comments.push(req.body);
        req.populate('comment');
        post.save(function(err) {
        res.redirect(`posts/${post._id}`);
        
        });
    });
};

function show(req, res) {
    Post.findById(req.params.id, function(err, post) {
        console.log(post);
        res.render('posts/new', {post, user: req.user} );
      
    });
  }

