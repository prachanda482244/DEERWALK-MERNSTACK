import { createToken } from '../utils/token.js'
let secretKey = "itachiuchihaismyfavouritecharacterfromnarutoanime"

let isAuthenticated = async (req, res, next) => {
    let info = req.params.id
    let token = createToken(info, secretKey, expires)
    next()
}

