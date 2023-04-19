const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const postRoutes = require('./backend/postRoutes')

const port = process.env.PORT || 3000

const app = express()

//middleware which hadles parsing incoming json data from front end
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//localhost:3000/api/posts
app.use('/api/posts',postRoutes)

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})
