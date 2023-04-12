const express = require('express')

const app = express()

const port = 3001
//request -> Comes from the front end
//response -> Comes from the back end


//middleware function
// app.use((req, res, next) => {
//     console.log('First middleware');
//     next()
// })
// localhost:3001/api/users
app.use('/api/posts',(req, res, next) => {
    res.json({
        message: "Post data",
        data: [{
            title: "ABCXYZ",
            content: 'content'},
        ]
    })  
})
// localhost:3001/api/products
app.use('/api/products',(req, res, next) => {
    res.json({message: "Products data"})  
})


app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})