const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/posts');

router.get('/create', postCtrl.create);
router.post('/', postCtrl.create);



module.exports = router;