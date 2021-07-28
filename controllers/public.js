module.exports = {
    public
};

function public(req,res) {
    res.use('public');
}