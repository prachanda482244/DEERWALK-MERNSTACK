import mensSchema from "../schema/mensSchema.js";
import { model } from "mongoose";

export const MensModule = model('MenRanking', mensSchema)
