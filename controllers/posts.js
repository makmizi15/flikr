module.exports = {
    create: createPost,
    new: postPage

};

function createPost(req,res) {
    res.render('posts/create', {
        user: req.user
    });
}
function postPage(req,res) {
    res.render('posts/new', {
        user: req.user
    });
    
}