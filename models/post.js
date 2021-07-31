const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    username: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    comment: String
});

const postSchema = new Schema({
    username: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    movieTitle: { type: String},
    rating: Number,
    postTitle: { type: String},
    description: String,
    comments: [commentSchema],
    likeCount: Number,
    postedBy: {type: Schema.Types.ObjectId, ref: "User"},
    movieImgURL: { type: String, default: 'https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg'}

}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);