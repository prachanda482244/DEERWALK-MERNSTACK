import connectToDb from './src/db/connect.js'
import express from 'express'
const app = express()
const port = process.env.PORT || 3000

connectToDb()

app.listen(port, () => {
    console.log("Server is running")
})