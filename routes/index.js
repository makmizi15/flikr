const express = require('express');
const router = express.Router();
//passport route
const passport = require("passport");
const indexCtrl = require('../controllers/index');

router.get('/', indexCtrl.index);

//Google Oauth login route
router.get(
    "/auth/google",
    passport.authenticate("google", {scope: ["profile", "email"]})
);

//OAuth Login Route
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

module.exports = router;

