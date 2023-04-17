const express = require('express')
const userRoutes = require('./routes/userRoutes')

const app = express()

const port = 3001
//request -> Comes from the front end
//response -> Comes from the back end

app.use(userRoutes);

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})