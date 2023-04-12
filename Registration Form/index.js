import { connectToDb } from "./src/db/connect.js";
import express from 'express'
import RegisterRouter from "./src/routers/registerRoutes.js";
import loginRouter from "./src/routers/loginRoutes.js";
const app = express()
const port = process.env.PORT || 3000

connectToDb()
app.use(express.json())
app.use(RegisterRouter)
app.use(loginRouter)
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})