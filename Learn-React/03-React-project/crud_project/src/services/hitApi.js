import axios from "axios";
import { baseURL } from "../config/config";

export let hitAPi = axios.create({
    baseURL: baseURL
})

