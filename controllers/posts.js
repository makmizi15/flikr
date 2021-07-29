// const User = require('../models/user');
// const Post = require('../models/post');

module.exports = {
    create: createPost
};



function createPost(req,res) {

    res.render('posts/create', {
        user: req.user
    });
}

