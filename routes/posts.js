const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/posts');

router.get('/create', isLoggedIn, postCtrl.create);
router.get('/:id', postCtrl.show);
router.post('/:id', isLoggedIn, postCtrl.addComment);
router.delete('/:id/comments/:commentId', isLoggedIn, postCtrl.deleteComment);
router.put('/:id/comments/:commentId', isLoggedIn, postCtrl.updateComment);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }

module.exports = router;