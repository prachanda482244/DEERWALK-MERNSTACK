import { connectToDb } from "./src/db/connect.js";
import { port } from "./src/config/config.js";
import express from 'express'
import RegisterRouter from "./src/routers/registerRoutes.js";
import loginRouter from "./src/routers/loginRoutes.js";
import cookieParser from "cookie-parser";
const app = express()

connectToDb()
app.use(express.json())
app.use(RegisterRouter)
app.use(loginRouter)
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})