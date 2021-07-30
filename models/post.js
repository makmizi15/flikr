const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    username: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    comment: String
});

const postSchema = new Schema({
    username: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    movieTitle: String,
    rating: Number,
    postTitle: String,
    description: String,
    postDate: Date,
    comments: [commentSchema],
    likeCount: Number,
    postedBy: {type: Schema.Types.ObjectId, ref: "User"},
    movieImgUrl: String

}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);