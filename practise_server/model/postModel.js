const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    content: {
        type: String,
        required: [true, 'Content is required']
    }    
}, {
    timestamp: true
})

module.exports = mongoose.model('posts', postSchema)