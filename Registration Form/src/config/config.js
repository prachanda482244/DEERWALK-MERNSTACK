import { config } from "dotenv";
config()
export let port = process.env.PORT || 3000;
export let dbUrl = process.env.DBURL || "mongodb://localhost:27017/RegisterSystem";
