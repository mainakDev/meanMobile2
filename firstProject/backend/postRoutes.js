const express = require('express')

const router = express.Router()

//localhost:3000/api/posts/
router.post('/', (req, res, next) => {
    const post  = req.body;
    console.log(post);
    res.json({
        message: 'Succesfully added POST!',
        posts: post
    })
})

router.get('/', (req, res, next) => {

    postData = [
        {
            id: 'gsgi7sdf',
            title: 'This is my first post',
            content: 'This is the content for my first post'
        },
        {
            id: '82eggf82',
            title: 'This is my second post',
            content: 'This is the content for my second post'
        },
        {
            id: '8273gfbj',
            title: 'This is my third post',
            content: 'This is the content for my third post'
        },
    ]

    res.json({
        message: 'posts sent sucessfully!',
        postData: postData
    })
})

module.exports = router