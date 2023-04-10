import { createMens, getALlMens, getOneMen, updateMens, deleteMens } from "../controllers/mensController.js";
import { Router } from "express";

const mensRouter = Router()

mensRouter.route('/mens').post(createMens).get(getALlMens)
mensRouter.route('/mens/:id').get(getOneMen).put(updateMens).delete(deleteMens)
export default mensRouter