const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    username: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    comment: {type: String},
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);