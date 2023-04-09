const express = require('express')
const app = express()
const connectToDatabase = require('./db/connection')
const port = process.env.PORT || 3000

// Router
const studentRouter = require('./router/studentRouter')

connectToDatabase()

app.use(express.json())
app.use(studentRouter)


// Creating a server
app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})


// You need express.json() and express.urlencoded() for post and put method not needed for get and delete method
// express.json() is a method inbuilt in express to recognize the incoming Request Object as a json object. This method is called as a middleware in your application using the code app.use(express.json())