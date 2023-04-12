import registerSchema from "./registerSchema.js";
import { model } from 'mongoose'
export const RegisterUser = model("Register_User", registerSchema)