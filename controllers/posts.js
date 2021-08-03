const Post = require('../models/post');
const mongoose = require('mongoose');
const post = new Post;

module.exports = {
    create: createPost,
    addComment,
    show,
    deleteComment,
    updateComment
};

function createPost(req,res) {
    res.render('posts/create', { user: req.user});
}

function addComment(req, res) {
    Post.findById(req.params.id, function (err, post) {
        post.comments.push(req.body);
        post.save(function(err) {
            
            res.redirect(`/posts/${req.params.id}`);
        });
    });
};


    
function show(req, res) {
    Post.findById(req.params.id, function(err, post) {
        console.log(post);
        res.render('posts/new', {post, user: req.user} );
      
    });
  };


function deleteComment(req, res){
    Post.findById(req.params.id, function(err, post){
        // post.id(req.params.id).remove();
        post.comments.pull(req.params.commentId).remove();
        post.save(function (err){
            if(err){
                console.log(err)
            }
        });
        res.redirect(`/posts/${req.params.id}`);
    })
}

function updateComment(req, res){
    Post.findById(req.params.id, function(err, post){
        post.comments.id(req.params.commentId).update(req.body);
        post.save(function (err){
            if(err){
                console.log(err)
            }
        });
        res.redirect(`/posts/${req.params.id}`);
    })

}