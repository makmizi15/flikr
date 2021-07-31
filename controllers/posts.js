const Post = require('../models/post');
const mongoose = require('mongoose');
const post = new Post;

module.exports = {
    create: createPost,
    addComment,
    deleteComment,
    editComment,
    show
};

function createPost(req,res) {
    res.render('posts/create', { user: req.user});
}

function addComment(req, res) {
    Post.findById(req.params.id, function (err, post) {
        post.comments.push(req.body);
        post.save(function(err) {
            
            res.redirect('back');
        });
    });
};


// function deleteComment(req, res) {
//     console.log('delete METHOD!')

//     console.log(req.params.id);
//     // let id = mongoose.Types.ObjectId(req.params.id);
//     post.comments.pull(req.params.id);
//     console.log(foundPost);
//     post.save(function(err) {
//         if(err) return handleError(err);
//         console.log('ReMOVED');
       
//     })
//         res.redirect('back')
    
//     // Post.findByIdAndDelete({"comments.id": id}, function (err, post) { 
//     //     if (err) console.log(err);
//     //     console.log(post.comments);
//     //     // const comment = post.comments.id(_id);
//     //     // console.log(comment);
//     //     // console.log(post);
//     //     // post.save(function(err) {
//     //     //     if (err) console.log(err);
//     //     // })
//     //     res.redirect('back');
//     // });

// };

function deleteComment (req, res) {
    Post.comments.findByIdAndDelete(req.params.id, function (err, deletedComment) {
        if (err) return res.send(err);
       comment.findById(deletedComment, function(err, post){
            post.comment.remove(deletedComment);
            post.save();
            return res.redirect("back");
            
        });
    });
};
// function deleteComment(req,res) {
//     console.log('delete method');
//     console.log(req.params.id);
//     Post.findById(req.params.id, function ( err, post) {
//         if (err) {
//             return console.log(err);
//         };
//         post.comments.remove(function(err) {
//             console.log(post.comments);
//         });
//     });
// };

function editComment(req, res, next) {
    Post.findByIdAndUpdate(req.params.id, function (err, post) {
        post.comments.push(req.body);
        post.save(function(err) {
            res.redirect('back');
        });
    });
};


// function addComment(req, res) {
//     const comment = new Comment(req.body);
//     comment.save(function (err) {
//         if (err) return res.render('posts/new', {
//             comment,
//         });
//         console.log(comment);
//     // for now, redirect right back to new.ejs
//         res.redirect('back');
//     });
// };

    
function show(req, res) {
    Post.findById(req.params.id, function(err, post) {
        console.log(post);
        res.render('posts/new', {post, user: req.user} );
      
    });
  };

