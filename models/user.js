const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: String,
    email: {type: String, default: 'Joban@gmail.com'},
    accountCreatedDate: Date,
    //postHistory: [postSchema],
    googleId: String

}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);