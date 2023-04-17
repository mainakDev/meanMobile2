const express = require('express')

const router = express.Router()

router.get('/api/posts',(req, res, next) => {
    res.json({
        message: "Post data",
        data: [{
            title: "ABCXYZ",
            content: 'content'},
        ]
    })  
})
// localhost:3001/api/products
router.get('/api/products',(req, res, next) => {
    res.json({message: "Products data"})  
})


module.exports = router