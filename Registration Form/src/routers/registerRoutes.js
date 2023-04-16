import { Router } from "express";
import { registerUser, getRegisteredUser, deleteRegisteredUser } from "../controllers/RegisterController.js";
// import { isAuthenticated } from "../middleware/auth.js";
const RegisterRouter = Router();

RegisterRouter.route('/register').post(registerUser).get(getRegisteredUser)
RegisterRouter.route('/register/:id').delete(deleteRegisteredUser)
export default RegisterRouter