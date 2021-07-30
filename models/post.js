const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    movieTitle: { type: String, required: true },
    rating: Number,
    postTitle: { type: String, required: true },
    postDate: Date,
    comments: [commentSchema],
    likeCount: Number,
    postedBy: [userSchema],
    movieImgURL: { type: String, required: true },

}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);