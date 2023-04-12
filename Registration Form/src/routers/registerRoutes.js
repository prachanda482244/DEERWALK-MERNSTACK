import { Router } from "express";
import { registerUser, getRegisteredUser, deleteRegisteredUser } from "../controllers/RegisterController.js";
const RegisterRouter = Router();

RegisterRouter.route('/register').post(registerUser).get(getRegisteredUser)
RegisterRouter.route('/register/:id').delete(deleteRegisteredUser)
export default RegisterRouter