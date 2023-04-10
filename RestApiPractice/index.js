import connectToDb from './src/db/connect.js'
import express from 'express'
import mensRouter from './src/routes/mensRoutes.js'
const app = express()
const port = process.env.PORT || 3000

connectToDb()

app.use(express.json())
app.use(mensRouter)

app.listen(port, () => {
    console.log("Server is running")
})