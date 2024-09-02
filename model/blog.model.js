const mongoose = require('mongoose');


const blogSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title: { type: String, unique: true },
    desc: { type: String, },
    isDelete: { type: Boolean, default: false }
}, {
    versionKey: false, timestamps: true
});

module.exports = mongoose.model('blogs', blogSchema);