const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    username: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    comment: String
});

const postSchema = new Schema({
    username: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    movieTitle: { type: String, required: true },
    rating: Number,
    postTitle: { type: String, required: true },
    description: String,
    postDate: Date,
    comments: [commentSchema],
    likeCount: Number,
    postedBy: {type: Schema.Types.ObjectId, ref: "User"},
    movieImgURL: { type: String, required: true },

}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);