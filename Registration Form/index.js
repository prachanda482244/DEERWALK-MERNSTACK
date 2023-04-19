import { connectToDb } from "./src/db/connect.js";
import { port } from "./src/config/config.js";
import express from 'express'
import RegisterRouter from "./src/routers/registerRoutes.js";
import loginRouter from "./src/routers/loginRoutes.js";
import cookieParser from "cookie-parser";
import { auth } from "./src/middleware/auth.js";
const app = express()

connectToDb()
app.use(express.json())
app.use(RegisterRouter)
app.use(loginRouter)
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))


app.get("/viewDetails", auth, (req, res) => {
    const user = req.user
    res.status(200).send(`Hey there... ${user.firstname} ${user.lastname} its really good to see you again. <br>
    Your email is : - ${user.email} and you are a good ${user.gender}. <br>
                    your contact number is ${user.phone}
                    <br>
                    <strong>HAVE A GOOD DAY</strong>
    `)

})
app.get("/logout", auth, (req, res) => {
    try {
        res.clearCookie("jwt")
        // res.redirect('/login')
        res.status(400).send("user logout")
    } catch (e) { res.send(e.message) }
})
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})