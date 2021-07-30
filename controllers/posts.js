const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
    create: createPost,
    new: postPage,
    addComment,
    show

};

function createPost(req,res) {
    res.render('posts/create', {
        user: req.user
    });
}
function postPage(req,res) {
    res.render('posts/:id', {
        user: req.user,
    });
    
}

function addComment(req, res) {
    Post.findById(req.params.id, function (err, post) {
        req.comments.push(req.body);
        req.populate('comment');
        post.save(function(err) {
        res.redirect(`posts/${user._id}`);
        
        });
    });
};

function show(req, res) {
    Post.findById(req.params.id, function(err, post) {
      res.render('posts/new', {user: req.user, post} );
    });
  }

