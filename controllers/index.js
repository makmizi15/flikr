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

// create a new post on homepage

function create(req, res) {
    const post = new Post(req.body);
    post.save(function (err) {
        if (err) return res.render('/');
        console.log(post);
    // for now, redirect right back to new.ejs
        res.redirect('/');
    });
}

// function create(req,res) {
//     Post.findById(req.params.id, function (err, post) {
//         post.push(req.body);
//         post.save(function (err) {
//           res.redirect(`/`);
//         });
//       });
// };
