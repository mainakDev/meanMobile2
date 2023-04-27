const express = require('express');
const Post = require('./model/postModel');
const router = express.Router()

//localhost:3000/api/posts/
router.post('/', (req, res, next) => {
    const post  = new Post({
        title: req.body.title,
        content: req.body.content,
    });
    console.log(post);
    post.save().then(createdPost => {
        res.status(201).json({
            message: 'Succesfully added POST!',
            postId: createdPost._id
        });
    });
})

router.get('/', (req, res, next) => {
    Post.find().then((data) => {
        res.status(200).json({
            message: 'posts sent sucessfully!',
            posts: data
        })
    })
})

router.delete('/:id', (req, res, next) => {
    Post.deleteOne({_id: req.params.id}).then(result => {
        res.status(200).json({
            message: 'Post sucessfully deleted'
        })
    })
})

module.exports = router