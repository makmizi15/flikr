const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    movieTitle: { type: String},
    rating: Number,
    postTitle: { type: String},
    description: { type: String, default: '...'},
    comments: {type: Schema.Types.ObjectId, ref: 'Comment'},
    likeCount: Number,
    movieImgURL: { type: String, default: 'https://www.brownweinraub.com/wp-content/uploads/2017/09/placeholder.jpg'}

}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);