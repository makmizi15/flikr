const Post = require('../models/post');

module.exports = {
    create: createPost,
    addComment,
    show,
    editComment

};

function createPost(req,res) {
    res.render('posts/create', { user: req.user});
}

function addComment(req, res, next) {
    Post.findById(req.params.id, function (err, post) {
        post.comments.push(req.body);
        post.save(function(err) {
            res.redirect('back');
        });
    });
};
function editComment(req, res, next) {
    Post.findByIdAndUpdate(req.params.id, function (err, post) {
        post.comments.push(req.body);
        post.save(function(err) {
            res.redirect('back');
        });
    });
};

    
function show(req, res) {
    Post.findById(req.params.id, function(err, post) {
        console.log(post);
        res.render('posts/new', {post, user: req.user} );
      
    });
  };

