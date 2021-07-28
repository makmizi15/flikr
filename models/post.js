const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    movieTitle: String,
    rating: Number,
    postTitle: String,
    postDate: Date,
    comments: [commentSchema],
    likeCount: Number,
    postedBy: [userSchema],
    movieImgURL: String

}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);