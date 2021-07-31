const Post = require('../models/post');
const Comment = require('../models/comment');

module.exports = {
    create: createPost,
    addComment,
    show

};

function createPost(req,res) {
    res.render('posts/create', { user: req.user});
}

function addComment(req, res, next) {
    req.comment.push(req.body);
    comment.save(function(err) {
        res.redirect(`posts/${post._id}`);
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

