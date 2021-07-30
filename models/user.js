const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    accountCreatedDate: Date,
    //postHistory: [postSchema],
    googleId: { type: String, required: true },

}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);