const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/posts');

router.get('/create', isLoggedIn, postCtrl.create);
router.get('/:id', isLoggedIn, postCtrl.show);
router.post('/:id', isLoggedIn, postCtrl.addComment);

// router.post('/new/:id', postCtrl.create);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }

module.exports = router;