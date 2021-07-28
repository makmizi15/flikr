const express = require('express');
const router = express.Router();
//passport route
const passport = require("passport");
const indexCtrl = require('../controllers/index');


router.get('/', indexCtrl.index);

router.get('/', function(req,res) {
    res.render('index', {
        user: req.user
    });
});

//Google Oauth login route
router.get(
    "/auth/google",
    passport.authenticate("google", {scope: ["profile", "email"]})
);

//Google Oauth Callback Route
router.get('/oauth2callback', passport.authenticate('google',
{
    successRedirect: '../',
    failureRedirect: '/'
}
));

//OAuth Login Route
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

module.exports = router;

