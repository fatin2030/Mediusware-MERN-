// Post Model (postModel.js)
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true, // Ensure author is required
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: null,
    },
});

// Middleware to automatically update `updatedAt`
PostSchema.pre('save', function (next) {
    if (this.isModified()) {
        this.updatedAt = Date.now();
    }
    next();
});

module.exports = mongoose.model('Post', PostSchema);
