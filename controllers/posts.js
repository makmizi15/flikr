const Post = require('../models/post');

module.exports = {
    create: createPost,
    addComment,
    deleteComment,
    show,
    
   

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

function deleteComment(req, res) {
    Post.findByIdAndDelete(req.params.id, function (err, post) {
        if (err) console.log(err);
        res.redirect('back');
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

