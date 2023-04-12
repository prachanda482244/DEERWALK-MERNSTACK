import { loginUser, updatePassword } from "../controllers/loginController.js";
import { Router } from "express";
const loginRouter = Router()

loginRouter.route('/login').post(loginUser)
loginRouter.route('/login/:id').put(updatePassword)
export default loginRouter