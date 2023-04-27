const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Post = require('./model/postModel')

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/MEANdemo').then(() => {
    console.log('MongoDB connected');
}).catch(() => {
    console.log('MongoDB not connected');
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//localhost:3000/api/posts
app.get('/api/posts', (req, res, next) => {
    Post.find().then((data) => {
        res.status(200).json({
            message: 'Post fetched sucessfully',
            posts: data
        })
    })
})

app.post('/api/posts', (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    })
    post.save();
    res.status(200).json({
        message: 'Post created sucessfully',
        post: post
    })

})

app.delete('/api/posts/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Post deleted!'
    })
})

app.listen(3000);